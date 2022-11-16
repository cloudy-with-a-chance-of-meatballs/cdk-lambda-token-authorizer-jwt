import * as cdk from 'aws-cdk-lib';
import { TokenAuthorizerJwtFunction } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new TokenAuthorizerJwtFunction(stack, 'Token-Authorizer-Jwt-Function', {
  tokenAuthorizerOptions: {
    verificationStrategy: {
      strategyName: 'argument',
      secret: stack.stackId,
    },
  },
});