import { lambdaHandler } from '../src';

const asymetricSecret = 'secVal42';
const jwksUri = 'https://example.auth0.com/.well-known/jwks.json';
const jwksKeyId = 'MN9dzu6gnI4ZZ-tjylYNW';
const jwtPayloadValidationSchema = '{"properties":{"foo":{"enum":["bar"]}},"additionalProperties":true}';

const tokens = {
  invalidForKey: { payload: { foo: 'bar' }, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.qPs0ENhI_xXsVP9PKgHR47AB6WShFWscA9xrDN0h1Bc' },
  validEmpty: { payload: { foo: 'bar' }, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.s94EkJ9nxp6LVSUNtIHJPuIRE_2flT_fQclxXPMXSH4' },
  validExpired: { payload: { foo: 'bar' }, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE2NjgxOTAzOTd9.v7c_zLEiPjr8vZO1qQa5XEfscv0JqRTYTsv6j4x86CI' },
  validNotExpiredValidationIssues: { payload: { foo: '42' }, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiI0MiIsImV4cCI6MTk2ODE5MDM5N30.G2AYPQl3VPlSj-GqVuHVR_xb-pFClNN1ox2JsIijiNg' },
};

const eventPayload = (token?: string): any => {
  return { type: 'TOKEN', methodArn: 'methodArn', ...(token ? { authorizationToken: token } : {}) };
};

describe('Token authorizer returns policyDocument', function () {

  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => { process.env = OLD_ENV; });

  it('verifies exception if no jwt token is provided', async () => {
    await expect(lambdaHandler(eventPayload())).rejects.toThrow('MISSING_AUTHORIZATION_TOKEN');
  });

  it('verifies INVALID_PROCESS_ENV error if NO secret or jwks uri are provided', async () => {

    await expect(lambdaHandler(eventPayload('foo'))).rejects.toThrow('MISSING_PROCESS_ENV_VARIABLES');
  });

  it('verifies exception if jwks uri is set but no jwks kid is provided', async () => {

    process.env.TOKEN_AUTHORIZER_JWKS_URI = jwksUri;

    await expect(lambdaHandler(eventPayload('foo'))).rejects.toThrow('MISSING_JWKS_KID');
  });

  it('verifies exception if jwks uri is invalid', async () => {

    process.env.TOKEN_AUTHORIZER_JWKS_KID = jwksKeyId;
    process.env.TOKEN_AUTHORIZER_JWKS_URI = 'invalid uri';

    await expect(lambdaHandler(eventPayload('foo'))).rejects.toThrow('JWKS_ERROR');
  });

  it('verifies exception if jwks has invalid response', async () => {

    process.env.TOKEN_AUTHORIZER_JWKS_KID = 'invalidKid';
    process.env.TOKEN_AUTHORIZER_JWKS_URI = 'https://example.com';

    await expect(lambdaHandler(eventPayload('foo'))).rejects.toThrow('JWKS_SYNTAXERROR');
  });

  it('verifies exception if jwks key is is not found', async () => {

    process.env.TOKEN_AUTHORIZER_JWKS_KID = 'invalidKid';
    process.env.TOKEN_AUTHORIZER_JWKS_URI = jwksUri;

    await expect(lambdaHandler(eventPayload('foo'))).rejects.toThrow('JWKS_SIGNINGKEYNOTFOUNDERROR');
  });

  it('verifies that a token wich is not matching to the provided key from jwks returns unauthorized', async () => {

    process.env.TOKEN_AUTHORIZER_JWKS_KID = jwksKeyId;
    process.env.TOKEN_AUTHORIZER_JWKS_URI = jwksUri;

    const response = await lambdaHandler(eventPayload(tokens.invalidForKey.token));
    expect(response.policyDocument.Statement.length).toEqual(1);
    expect(response.policyDocument.Statement[0].Effect).toEqual('Deny');
    expect(response.context!.errorType).toEqual('JSONWEBTOKENERROR');
  });

  it('verifies that a token wich is not matching to the provided asymetric key returns unauthorized', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = asymetricSecret;

    const response = await lambdaHandler(eventPayload(tokens.invalidForKey.token));
    expect(response).toMatchObject(
      {
        policyDocument: {
          Version: '2012-10-17',
          Statement: [
            { Action: 'execute-api:Invoke', Effect: 'Deny', Resource: '*' },
          ],
        },
        principalId: 'user',
        context: {
          error: true,
          errorType: 'JSONWEBTOKENERROR',
          errorMessage: 'invalid signature',
        },
      },
    );
  });

  it('verifies allow policy and context data on valid token with asymetric key set', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = asymetricSecret;

    const response = await lambdaHandler(eventPayload(tokens.validEmpty.token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Allow');
    expect(response.context).toMatchObject({ error: false, foo: 'bar' });
  });

  it('verifies deny policy on expired token', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = asymetricSecret;

    const response = await lambdaHandler(eventPayload(tokens.validExpired.token));
    expect(response.policyDocument.Statement.length).toEqual(1);
    expect(response.policyDocument.Statement[0].Effect).toEqual('Deny');
    expect(response.context!.errorType).toEqual('TOKENEXPIREDERROR');
  });

  it('verifies allow policy and context data on valid token with successfully passed payload validation', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = asymetricSecret;
    process.env.TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON = jwtPayloadValidationSchema;

    const response = await lambdaHandler(eventPayload(tokens.validEmpty.token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Allow');
    expect(response.context).toMatchObject({ error: false, foo: 'bar' });
  });

  it('verifies deny policy and context data on valid token with payload validation errors', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = asymetricSecret;
    process.env.TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON = jwtPayloadValidationSchema;

    const response = await lambdaHandler(eventPayload(tokens.validNotExpiredValidationIssues.token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Deny');
    expect(response.context!.errorType).toEqual('JWT_PAYLOAD_VALIDATION_ERROR');
    expect(response.context!.errorMessage).toEqual('[{"instancePath":"/foo","schemaPath":"/properties/foo/enum","keyword":"enum","params":{"allowedValues":["bar"]},"message":"must be equal to one of the allowed values"}]');
  });
});