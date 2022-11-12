# CDK Lambda TokenAuthorizer JWT

Add a lambda function to your project which can be used as a apigateway token authorizer

## Install

### TypeScript

```shell
npm install @cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt
yarn add @cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt
```

### Python

```shell
pip install cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt
```

## Usage

```typescript

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

//### EXAMPLE: import the function
import { TokenAuthorizerJwtFunction } from "@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt";
//### END

export class HelloworldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props); 
    
    const api = new apigateway.RestApi(this, 'ApiName', {});
    
    //### EXAMPLE: init the function
    const tokenAuthFunction = new TokenAuthorizerJwtFunction(this, 'lambdaFunctionName', {});
    //### END
    
    const tokenAuthorizer = new apigateway.TokenAuthorizer(this, 'tokenAuthorizerName', { 
      //### EXAMPLE: use as handler
      handler: tokenAuthFunction 
      //### END
    });
    
    // ...
    const someMethod = SOMEAPIRESOURCE.addMethod("GET", SOMETARGETINTEGRATION, { authorizer: tokenAuthorizer });   
  }
}

```
