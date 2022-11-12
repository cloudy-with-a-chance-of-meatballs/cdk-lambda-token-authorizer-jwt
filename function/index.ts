import { AuthResponse, CustomAuthorizerEvent, PolicyDocument } from 'aws-lambda';
import jwks from 'jwks-rsa';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import Ajv, { JTDDataType } from "ajv/dist/jtd"

const ajv = new Ajv({ strictTypes: true, strictTuples: true, strictRequired: true });

const POLICY_DOCUMENT_VERSION:            string = '2012-10-17';
const POLICY_DOCUMENT_STATEMENT_ACTION:   string = 'execute-api:Invoke';
const POLICY_DOCUMENT_STATEMENT_RESOURCE: string = '*';

enum PolicyStatementEffect {
  DENY  = 'Deny',
  ALLOW = 'Allow'
};

// generate a policy document
const generatePolicy = (effect: PolicyStatementEffect): PolicyDocument => {
  const policy = {
    Version: POLICY_DOCUMENT_VERSION,
    Statement: [{ 
      Action: POLICY_DOCUMENT_STATEMENT_ACTION, 
      Effect: effect, 
      Resource: POLICY_DOCUMENT_STATEMENT_RESOURCE
    }]
  };
  return policy as PolicyDocument;
}

// get the secret from env variable or try to get it from jwks
const getJwtVerificationSecret = async (envSecret: string, jwksUri: string, jwksKid: string) : Promise<Secret> => {  
  // key already provided
  if (envSecret) return envSecret;
  // try to fetch the jwks 
  if (jwksUri) {
    // no key id was provided
    if (!jwksKid) throw new Error('MISSING_JWKS_KID');
    try {
      // try to fetch the jwks.json
      const jwksClient = jwks({
        jwksUri: jwksUri,
        cache: true,
        cacheMaxEntries: 5,
        cacheMaxAge: 600000 
      });
      const jwksKey   = await jwksClient.getSigningKey(jwksKid);
      const publicKey = await jwksKey.getPublicKey();
      return publicKey;
    } catch (e) {
      throw new Error('JWKS_' + (e as Error).name.toUpperCase());
    }
  } 
  // neither jwks uri not secret provided
  throw new Error('MISSING_PROCESS_ENV_VARIABLES');
}

// generate auth response containing policy and optional context
const getAuthResponse = (effect: PolicyStatementEffect, contextData: any, principalIdStr?: string) : AuthResponse => {
  return { 
    policyDocument: generatePolicy(effect), 
    principalId: ( principalIdStr || 'user' ), 
    context: contextData
  };
}

// custom validaton error
class JwtPayloadValidationError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "Jwt_Payload_Validation_Error";
    Object.setPrototypeOf(this, JwtPayloadValidationError.prototype);
  }
}

// validate payload against schema
const validateJwtPayloadAgainstJsonSchema = (payload: JwtPayload, schemaAsJson: string) : JwtPayload => {
  if (!schemaAsJson)     return payload;
  const schema           = JSON.parse(schemaAsJson);
  type jwtPayloadSchema  = JTDDataType<typeof schema>;
  const validate         = ajv.compile<jwtPayloadSchema>(schema);
  if (validate(payload)) return payload;
  throw new JwtPayloadValidationError(JSON.stringify(validate.errors));
}

// handle event
export const lambdaHandler = async (event: CustomAuthorizerEvent): Promise<AuthResponse> => {
  
  // no jwt was provided in the event payload
  if (!event.authorizationToken) throw new Error('MISSING_AUTHORIZATION_TOKEN');
  
  // everything could be successsfully obtained
  const TOKEN:  string = event.authorizationToken;
  const SECRET: Secret = await getJwtVerificationSecret(
    (process.env.TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET || ''),
    (process.env.TOKEN_AUTHORIZER_JWKS_URI || ''),
    (process.env.TOKEN_AUTHORIZER_JWKS_KID || '')
  );
  
  try {
    
    //decode an validate the token
    const decodedJwt: JwtPayload         = (jwt.verify(TOKEN, SECRET) as JwtPayload);
    const schemaValidatedJwt: JwtPayload = validateJwtPayloadAgainstJsonSchema(
      decodedJwt, 
      (process.env.TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON || '')
    );
    
    // valid 
    return getAuthResponse(PolicyStatementEffect.ALLOW, { error: false, ...(schemaValidatedJwt as Object) });
    
  } catch (e) {
      
    // deny on jwt validation errors
    return getAuthResponse(
      PolicyStatementEffect.DENY, 
      { error: true, errorType: (e as Error).name.toUpperCase(), errorMessage: (e as Error).message }
    );
  }
};
