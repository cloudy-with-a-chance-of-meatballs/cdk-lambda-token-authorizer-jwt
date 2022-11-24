import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

// note: unfortunately C# jsii compilation does not allow a common interface with strategyName neither a union type

export interface ITokenValidationStrategyAjvJsonSchemaValidator {
  readonly strategyName: 'schema';
  readonly schema: string;
}

export interface ITokenVerificationStrategyArgument {
  readonly strategyName: 'argument';
  readonly secret: string;
}

export interface ITokenVerificationStrategyJwksFromUriByKid {
  readonly strategyName: 'jwksFromUriByKid';
  readonly uri: string;
  readonly kid: string;
}

export interface ITokenAuthorizerOptions {
  readonly verificationStrategy: ITokenVerificationStrategyArgument | ITokenVerificationStrategyJwksFromUriByKid;
  readonly payloadValidationStrategy?: ITokenValidationStrategyAjvJsonSchemaValidator;
}

export interface TokenAuthorizerFunctionOptions extends lambda.FunctionOptions {
  readonly tokenAuthorizerOptions: ITokenAuthorizerOptions;
}

enum FnEnvVars {
  JwksUri = 'TOKEN_AUTHORIZER_JWKS_URI',
  JwksKid = 'TOKEN_AUTHORIZER_JWKS_KID',
  Secret = 'TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET',
  Schema = 'TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON'
}

const lambdaEnvVars = (options: TokenAuthorizerFunctionOptions): any => {
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

export class TokenAuthorizerJwtFunction extends lambda.Function {
  public constructor(scope: Construct, id: string, props: TokenAuthorizerFunctionOptions) {

    super(scope, id, {
      ...props,
      handler: 'index.lambdaHandler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../assets/function/src/authorizer.lambda')),
      runtime: lambda.Runtime.NODEJS_16_X,
      environment: {
        ...(props.environment || {}),
        ...(lambdaEnvVars(props)),
      },
    });
  }
}