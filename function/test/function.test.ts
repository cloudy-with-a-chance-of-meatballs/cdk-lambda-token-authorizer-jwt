import { lambdaHandler } from '../src';

const symmetricSecret = 'secVal42';
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

  it('verifies that a token wich is not matching to the provided symmetric key returns unauthorized', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = symmetricSecret;

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
  
  it('verifies that a token wich which can be verfified against a asymmetric secret returns allowed', async () => {
    
    const pubKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo\n4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u\n+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh\nkd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ\n0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg\ncKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc\nmwIDAQAB\n-----END PUBLIC KEY-----";
    const token  = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.pIqXt4HVhvjNS-6mPEz9mR7pr8V-w1u-x1jMN7Tie-eqLUEcYA6I-3SeSHfCfEDhM4ssp7wpPZ4CoFJV3m_hQR-sugBbZ6CvSNlGT7U2DXBvmTyHSU-eckM7y4fxWGsa8-PIm1MZHKvIUCD5vYcXKgt0mz_57OOXikcT-sgbUDYB0HU0Gii_klO7QNUV7Wykyu1HK6wg9nQJXJ8rzFhPMGR3Nqo-D9UIhayl714Tm-ZqdAWRD1YMsK6zJz5ajQu1_NZ11j4ACAVF2BuzSSfT2Cuw1zMcE_7xce1nSt1sHho__SBobsUPvO_Izp12ppz--zcAC6dPS1_4W8GxuiodEQ";
    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = pubKey;

    const response = await lambdaHandler(eventPayload(token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Allow');
  });
  
  it('verifies that a token wich cannot be verfified against a asymmetric secret returns deny', async () => {
    
    const pubKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxd4246S8mTuCixdgf3YN\nzuZkD+ZEYCv1DQczhjdE48eeN8HUCZ9iDVdf9+IpBUR2mlYJ2x4FbvJ/QxDQXIF+\nz8mWvYMWrHM985RABeK7U6VjvWjCnAhF8T5v7w2yJHOOsrzPWXccr1M08n+Uf8xr\nB4kpLSlaP29MnouBtsYH8Oo4YSmZFKWmv3sy4VVzTO8PimgZXav6kdyeU+sC5WB1\ndPbhwKHPOUIAZ7dwqpRKSdpIz+rLNMtmKHQ0zT9bRu8Thc/8YI9dldJ9jNEQazcB\nfAnKo1d1cZFZya22M7iqzItJv+DnfFtIQVGnHX3rWbeKuuCOkG0Ne8VFx0dA/H69\nLwIDAQAB\n-----END PUBLIC KEY-----";
    const token  = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIifQ.pIqXt4HVhvjNS-6mPEz9mR7pr8V-w1u-x1jMN7Tie-eqLUEcYA6I-3SeSHfCfEDhM4ssp7wpPZ4CoFJV3m_hQR-sugBbZ6CvSNlGT7U2DXBvmTyHSU-eckM7y4fxWGsa8-PIm1MZHKvIUCD5vYcXKgt0mz_57OOXikcT-sgbUDYB0HU0Gii_klO7QNUV7Wykyu1HK6wg9nQJXJ8rzFhPMGR3Nqo-D9UIhayl714Tm-ZqdAWRD1YMsK6zJz5ajQu1_NZ11j4ACAVF2BuzSSfT2Cuw1zMcE_7xce1nSt1sHho__SBobsUPvO_Izp12ppz--zcAC6dPS1_4W8GxuiodEQ";
    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = pubKey;

    const response = await lambdaHandler(eventPayload(token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Deny');
  });
  

  it('verifies allow policy and context data on valid token with asymetric key set', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = symmetricSecret;

    const response = await lambdaHandler(eventPayload(tokens.validEmpty.token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Allow');
    expect(response.context).toMatchObject({ error: false, foo: 'bar' });
  });

  it('verifies deny policy on expired token', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = symmetricSecret;

    const response = await lambdaHandler(eventPayload(tokens.validExpired.token));
    expect(response.policyDocument.Statement.length).toEqual(1);
    expect(response.policyDocument.Statement[0].Effect).toEqual('Deny');
    expect(response.context!.errorType).toEqual('TOKENEXPIREDERROR');
  });

  it('verifies allow policy and context data on valid token with successfully passed payload validation', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = symmetricSecret;
    process.env.TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON = jwtPayloadValidationSchema;

    const response = await lambdaHandler(eventPayload(tokens.validEmpty.token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Allow');
    expect(response.context).toMatchObject({ error: false, foo: 'bar' });
  });

  it('verifies deny policy and context data on valid token with payload validation errors', async () => {

    process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET = symmetricSecret;
    process.env.TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON = jwtPayloadValidationSchema;

    const response = await lambdaHandler(eventPayload(tokens.validNotExpiredValidationIssues.token));
    expect(response.policyDocument.Statement[0].Effect).toEqual('Deny');
    expect(response.context!.errorType).toEqual('JWT_PAYLOAD_VALIDATION_ERROR');
    expect(response.context!.errorMessage).toEqual('[{"instancePath":"/foo","schemaPath":"/properties/foo/enum","keyword":"enum","params":{"allowedValues":["bar"]},"message":"must be equal to one of the allowed values"}]');
  });
});