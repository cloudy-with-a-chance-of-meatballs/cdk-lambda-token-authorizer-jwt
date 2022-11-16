import * as lambda from 'aws-cdk-lib/aws-lambda';

// Validation Strategies

interface ITokenValidationStrategy {
  readonly strategyName: string;
}

interface ITokenValidationStrategyAjvJsonSchemaValidator extends ITokenValidationStrategy {
  readonly strategyName: 'schema';
  readonly schema: string;
}

type TokenValidationStrategy =
    | ITokenValidationStrategyAjvJsonSchemaValidator

// Verification Strategies

interface ITokenVerificationStrategy {
  readonly strategyName: string;
}

interface ITokenVerificationStrategyArgument extends ITokenVerificationStrategy {
  readonly strategyName: 'argument';
  readonly secret: string;
}

interface ITokenVerificationStrategyJwksFromUriByKid extends ITokenVerificationStrategy {
  readonly strategyName: 'jwksFromUriByKid';
  readonly uri: string;
  readonly kid: string;
}

type TokenVerificationStrategy =
    | ITokenVerificationStrategyArgument
    | ITokenVerificationStrategyJwksFromUriByKid

// Options

type TokenAuthorizerOptions = {
  readonly verificationStrategy: TokenVerificationStrategy;
  readonly payloadValidationStrategy?: TokenValidationStrategy;
}

interface TokenAuthorizerFunctionOptions extends lambda.FunctionOptions {
  readonly tokenAuthorizerOptions: TokenAuthorizerOptions;
}

// Helper

enum FnEnvVars {
  JwksUri = 'TOKEN_AUTHORIZER_JWKS_URI',
  JwksKid = 'TOKEN_AUTHORIZER_JWKS_KID',
  Secret = 'TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET',
  Schema = 'TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON'
}

export {
  ITokenValidationStrategy,
  ITokenValidationStrategyAjvJsonSchemaValidator,
  TokenValidationStrategy,
  ITokenVerificationStrategy,
  ITokenVerificationStrategyArgument,
  ITokenVerificationStrategyJwksFromUriByKid,
  TokenVerificationStrategy,
  TokenAuthorizerOptions,
  TokenAuthorizerFunctionOptions,
};

export default function lambdaEnvVars(options: TokenAuthorizerFunctionOptions): any {
  let e = ((options!.environment ?? {}) as any);
  switch (options.tokenAuthorizerOptions!.payloadValidationStrategy?.strategyName || '') {
    case 'schema':
      e[FnEnvVars.Schema] = options.tokenAuthorizerOptions!.payloadValidationStrategy!.schema;
  }
  switch (options.tokenAuthorizerOptions.verificationStrategy.strategyName) {
    case 'argument':
      e[FnEnvVars.Secret] = options.tokenAuthorizerOptions.verificationStrategy.secret;
  }
  switch (options.tokenAuthorizerOptions.verificationStrategy.strategyName) {
    case 'jwksFromUriByKid':
      e[FnEnvVars.JwksUri] = options.tokenAuthorizerOptions.verificationStrategy.uri;
      e[FnEnvVars.JwksKid] = options.tokenAuthorizerOptions.verificationStrategy.kid;
  }
  return e;
};