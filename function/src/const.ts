const AJV_VALIDATOR_DEFAULT_OPTIONS = { strictTypes: true, strictTuples: true, strictRequired: true };

const JWKS_CLIENT_DEFAULT_OPTIONS   = { cache: true, cacheMaxEntries: 5, cacheMaxAge: 600000 };

const POLICY_VERSION  = '2012-10-17';
const POLICY_ACTION   = 'execute-api:Invoke';
const POLICY_RESOURCE = '*'; 

enum PolicyStatementEffect {
  DENY  = 'Deny',
  ALLOW = 'Allow'
};

enum FnEnvVars {
  JwksUri = "TOKEN_AUTHORIZER_JWKS_URI",
  JwksKid = "TOKEN_AUTHORIZER_JWKS_KID",
  Secret  = "TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET",
  Schema  = "TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON"
};

enum FnErrorConstants {
  Expired     = "TOKENEXPIREDERROR",
  Validation  = "JWT_PAYLOAD_VALIDATION_ERROR",
  JwtError    = "JSONWEBTOKENERROR",
  JwksPrefix  = "JWKS_",
  JwksSigning = "JWKS_SIGNINGKEYNOTFOUNDERROR",
  JwksSyntax  = "JWKS_SYNTAXERROR",
  JwksError   = "JWKS_ERROR",
  JwksKid     = "MISSING_JWKS_KID",
  ConfigEnv   = "MISSING_PROCESS_ENV_VARIABLES",
  EventToken  = "MISSING_AUTHORIZATION_TOKEN",
  Unknown     = "UNKNOWN_ERROR",
};

type AuthorizerPolicyDocument = {
  Version: string,
  Statement: [{ 
    Action: string, 
    Effect: PolicyStatementEffect, 
    Resource: string
  }]
};

const policyDefaults: AuthorizerPolicyDocument = {
  Version: POLICY_VERSION,
  Statement: [{ 
    Action: POLICY_ACTION, 
    Effect: PolicyStatementEffect.DENY, 
    Resource: POLICY_RESOURCE
  }]
};

const authorizerPolicyDocument = (effect: PolicyStatementEffect): AuthorizerPolicyDocument => {
  const authPolicy = Object.assign({}, policyDefaults);
  authPolicy.Statement[0].Effect = effect;
  return authPolicy as AuthorizerPolicyDocument;
}

export { 
  PolicyStatementEffect,
  AuthorizerPolicyDocument,
  authorizerPolicyDocument,
  FnEnvVars,
  FnErrorConstants,
  JWKS_CLIENT_DEFAULT_OPTIONS,
  AJV_VALIDATOR_DEFAULT_OPTIONS
};