import * as cdk from 'aws-cdk-lib';
import { TokenAuthorizerJwtFunction } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new TokenAuthorizerJwtFunction(stack, 'Token-Authorizer-Jwt-Function', {
  authorizerOptions: {
    secret: stack.stackId,
  },
});