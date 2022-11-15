import { AuthResponse, CustomAuthorizerEvent, PolicyDocument } from 'aws-lambda';
import jwt, { Secret } from 'jsonwebtoken';

import { 
  PolicyStatementEffect, 
  authorizerPolicyDocument,
  FnErrorConstants,
  FnEnvVars
} from './const';

import { validateJwtPayloadAgainstJsonSchema } from './validator';
import { getPublicKeyFromJwksUri }             from './jwks';

// handle event
export const lambdaHandler = async (event: CustomAuthorizerEvent): Promise<AuthResponse> => {

  // no jwt was provided in the event payload
  if (!event.authorizationToken) throw new Error(FnErrorConstants.EventToken);
  
  const envSecret = (process.env[FnEnvVars.Secret]  || '');
  const jwksUri   = (process.env[FnEnvVars.JwksUri] || '');
  const jwksKid   = (process.env[FnEnvVars.JwksKid] || '');
  
  if (!envSecret && !jwksUri) throw new Error(FnErrorConstants.ConfigEnv);
  if (jwksUri    && !jwksKid) throw new Error(FnErrorConstants.JwksKid);
  
  // everything could be successsfully obtained
  const TOKEN:  string = event.authorizationToken;
  const SECRET: Secret = (envSecret ? envSecret : (await getPublicKeyFromJwksUri(jwksUri, jwksKid)));

  try {

    //decode an validate the token
    let decodedJwt: any = (jwt.verify(TOKEN, SECRET) as any);
    
    //validate against schema if provided
    const schema = process.env.TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON || false
    if (schema) decodedJwt = (validateJwtPayloadAgainstJsonSchema(decodedJwt, schema) as any);

    // valid  grant access
    return authResponseAllow(decodedJwt);

  } catch (e) {

    // deny access
    return authResponseError((e as Error).name.toUpperCase(), (e as Error).message);
  }
};

// response helpers
const authResponse = (policyDocument: PolicyDocument, context: any): AuthResponse => {
  return { principalId: 'user', context: context, policyDocument: policyDocument } as AuthResponse;
}

// deny
const authResponseError = (type: string, message: string): AuthResponse => {
  const policy = authorizerPolicyDocument(PolicyStatementEffect.DENY) as PolicyDocument;
  return authResponse(policy, { error: true, errorType: type, errorMessage: message });
}

// allow
const authResponseAllow = (context: any): AuthResponse => {
  const policy = authorizerPolicyDocument(PolicyStatementEffect.ALLOW) as PolicyDocument;
  return authResponse(policy, { error: false, ...context});
}
