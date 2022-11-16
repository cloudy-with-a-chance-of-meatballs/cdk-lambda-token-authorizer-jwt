import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { TokenAuthorizerJwtFunction } from '../src';

describe('Token authorizer infrastructure', function () {

  test('Lambda functions should be configured with properties and execution roles', () => {

    const mockApp = new App();
    const stack = new Stack(mockApp);

    new TokenAuthorizerJwtFunction(stack, 'testing-stack', {
      tokenAuthorizerOptions: {
        verificationStrategy: {
          strategyName: 'argument',
          secret: stack.stackId,
        },
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
      Runtime: 'nodejs16.x',
    });

    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
        Version: '2012-10-17',
      },
    });
  });

  test('Lambda functions should be configured with jwks strategy env variables and can receive defaults', () => {

    const mockApp = new App();
    const stack = new Stack(mockApp);

    new TokenAuthorizerJwtFunction(stack, 'testing-stack-env-vars', {
      environment: {
        ANOTHER: 'FOOBAR',
      },
      tracing: lambda.Tracing.ACTIVE,
      tokenAuthorizerOptions: {
        verificationStrategy: {
          strategyName: 'jwksFromUriByKid',
          uri: 'uri',
          kid: 'kid',
        },
        payloadValidationStrategy: {
          strategyName: 'schema',
          schema: JSON.stringify({ foo: 'template' }),
        },
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
      TracingConfig: { Mode: 'Active' },
      Environment: {
        Variables: {
          ANOTHER: 'FOOBAR',
          TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON: '{"foo":"template"}',
          TOKEN_AUTHORIZER_JWKS_URI: 'uri',
          TOKEN_AUTHORIZER_JWKS_KID: 'kid',
        },
      },
    });

  });

  test('Lambda functions should be configured with argument env variables and can receive defaults', () => {

    const mockApp = new App();
    const stack = new Stack(mockApp);

    new TokenAuthorizerJwtFunction(stack, 'testing-stack-env-vars', {
      environment: {
        ANOTHER: 'FOOBAR',
      },
      tracing: lambda.Tracing.ACTIVE,
      tokenAuthorizerOptions: {
        verificationStrategy: {
          strategyName: 'argument',
          secret: 'Foobar',
        },
      },
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::Lambda::Function', {
      TracingConfig: { Mode: 'Active' },
      Environment: {
        Variables: {
          ANOTHER: 'FOOBAR',
          TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET: 'Foobar',
        },
      },
    });

  });

});