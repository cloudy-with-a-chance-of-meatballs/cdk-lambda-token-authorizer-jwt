# CDK Lambda TokenAuthorizer JWT

Add a lambda function to your project which can be used as a apigateway token authorizer

## Install

### TypeScript

```shell
npm install cdk-lambda-token-authorizer-jwt
yarn add cdk-lambda-token-authorizer-jwt
```

### Python

```shell
pip install cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt
```

## Usage

- In general the implementation extends `lambda.Function` and the `TokenAuthorizerJwtFunctionOptions` extend `lambda.FunctionOptions` - so you have full flexibillity over the rest of the options beside `handler, code. runtime`.

- The token verfification is done via `https://github.com/auth0/node-jsonwebtoken`, the jwks fetcher is using `https://github.com/auth0/node-jwks-rsa`. The implementation per default verifies the token and if given the expiration.

- Any verification of the token payload must be done over injecting a json schema for validation using `https://ajv.js.org/json-type-definition.html`.

- **Example usage with Rest Apigateway**

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

import { TokenAuthorizerJwtFunction } from "cdk-lambda-token-authorizer-jwt";

export class HelloworldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props); 

    const api               = new apigateway.RestApi(this, 'ApiName', {});
    const tokenAuthFunction = new TokenAuthorizerJwtFunction(this, 'fnName', {...});
    const tokenAuthorizer   = new apigateway.TokenAuthorizer(this, 'fnNameApiGwAuthorizer', { 
      handler: tokenAuthFunction // use the TokenAuthorizerJwtFunction
    });
    
    const someMethod = api.someresource.addMethod("GET", some_target_integration, { 
      authorizer: tokenAuthorizer 
    });   
  }
}
```

- **Validation**

```typescript
const myValidation = { properties:{ iss: { enum: ['my_trusted_iss'] } }};

new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  tokenPayloadJsonSchema: JSON.stringify(myValidation)
}});
```

- **Using JWKS (recommended)**

```typescript
new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  jwks: { 
    uri: 'https://example.auth0.com/.well-known/jwks.json'; 
    kid: 'REEyM0FBMDhFQkQ5QjY4Q0YzRjVGNzQ5OTU3RjUzN0FEREFFNzJGMg' 
  }
}});
```

- **Using asymmetric algorithms, e.g. public key (recommended)**

```typescript
const myPublicKeyOneliner = '-----BEGIN PUBLIC KEY---\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKuTfz7kpJHPrmcmgx4Xf4GMoM2kK4mh\nMpSOW3qu1zZA1wfMHV8PS0Kds0nXMB6mmHk/Ke1\Et68aEspQRIn1aLcCAwEAAQ==\n-----END PUBLIC KEY-----';

new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  secret: myPublicKeyOneliner
}});
``` 

- **Using symmetric algorithms, same key for sign and verify (highly discouraged)**

<small>:warning: the key might be exposed during deploy, in the runtime etc.<small>

```typescript
const myPublicKeyOneliner = 'sharedSecret';

new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  secret: myPublicKeyOneliner
}});
```