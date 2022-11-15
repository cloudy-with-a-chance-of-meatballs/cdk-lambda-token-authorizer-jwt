import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

enum FnEnvVars {
  JwksUri = 'TOKEN_AUTHORIZER_JWKS_URI',
  JwksKid = 'TOKEN_AUTHORIZER_JWKS_KID',
  Secret = 'TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET',
  Schema = 'TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON'
};

export interface IAuthorizerOptionsJwks {
  readonly uri: string;
  readonly kid: string;
};

export interface IAuthorizerOptions {
  readonly tokenPayloadJsonSchema?: string;
  readonly secret?: string;
  readonly jwks?: IAuthorizerOptionsJwks;
};

export interface TokenAuthorizerJwtFunctionOptions extends lambda.FunctionOptions {
  readonly authorizerOptions: IAuthorizerOptions;
};

const getFunctionEnvVariablesByOptions = (options: TokenAuthorizerJwtFunctionOptions): any => {
  let config: any = {};
  if (options.authorizerOptions.tokenPayloadJsonSchema) {
    config[FnEnvVars.Schema] = options.authorizerOptions.tokenPayloadJsonSchema;
  }
  if (options.authorizerOptions.secret) {
    config[FnEnvVars.Secret] = options.authorizerOptions.secret;
  }
  if (options.authorizerOptions.jwks) {
    config[FnEnvVars.JwksUri] = options.authorizerOptions.jwks.uri;
    config[FnEnvVars.JwksKid] = options.authorizerOptions.jwks.kid;
  }
  return config;
};

export class TokenAuthorizerJwtFunction extends lambda.Function {
  public constructor(scope: Construct, id: string, props: TokenAuthorizerJwtFunctionOptions) {

    super(scope, id, {
      ...props,
      handler: 'index.lambdaHandler',
      code: lambda.Code.fromAsset('function'),
      runtime: lambda.Runtime.NODEJS_16_X,
      environment: {
        ...(props.environment || {}),
        ...(getFunctionEnvVariablesByOptions(props)),
      },
    });
  }
}
