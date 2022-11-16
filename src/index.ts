import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

import lambdaEnvVars, {
  ITokenValidationStrategy,
  ITokenValidationStrategyAjvJsonSchemaValidator,
  TokenValidationStrategy,
  ITokenVerificationStrategy,
  ITokenVerificationStrategyArgument,
  ITokenVerificationStrategyJwksFromUriByKid,
  TokenVerificationStrategy,
  TokenAuthorizerOptions,
  TokenAuthorizerFunctionOptions,
} from './options';

export class TokenAuthorizerJwtFunction extends lambda.Function {
  public constructor(scope: Construct, id: string, props: TokenAuthorizerFunctionOptions) {

    super(scope, id, {
      ...props,
      handler: 'index.lambdaHandler',
      code: lambda.Code.fromAsset('function'),
      runtime: lambda.Runtime.NODEJS_16_X,
      environment: {
        ...(props.environment || {}),
        ...(lambdaEnvVars(props)),
      },
    });
  }
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