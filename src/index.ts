import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class TokenAuthorizerJwtFunction extends lambda.Function {
  public constructor(scope: Construct, id: string, props: lambda.FunctionOptions) {

    super(scope, id, {
      handler: 'index.lambdaHandler',
      code: lambda.Code.fromAsset('function'),
      runtime: lambda.Runtime.NODEJS_16_X,
      ...props,
    });
  }
}
