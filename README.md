# CDK Lambda TokenAuthorizer JWT

Add a lambda function to your project which can be used as a apigateway token authorizer

[![View on Construct Hub](https://constructs.dev/badge?package=%40cloudy-with-a-chance-of-meatballs%2Fcdk-lambda-token-authorizer-jwt)](https://constructs.dev/packages/@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt)

[![GitHub](https://img.shields.io/github/license/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt?style=flat-square)](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/blob/main/LICENSE)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt?sort=semver&style=flat-square)](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/releases)
[![npm (scoped)](https://img.shields.io/npm/v/@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt?style=flat-square)](https://www.npmjs.com/package/@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt)
[![PyPI](https://img.shields.io/pypi/v/cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt?style=flat-square)](https://pypi.org/project/cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt/)
[![Nuget](https://img.shields.io/nuget/v/CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt?style=flat-square)](https://www.nuget.org/packages/CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/release/main?label=release&style=flat-square)](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/actions/workflows/release.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/10f0734997f4d96da662/maintainability)](https://codeclimate.com/github/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/maintainability)
[![codecov](https://codecov.io/gh/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/branch/main/graph/badge.svg?token=86HXCCHOGJ)](https://codecov.io/gh/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt)

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

- **JWT Token handling**: The token verfification is done via [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), the jwks fetcher is using [https://github.com/auth0/node-jwks-rsa](https://github.com/auth0/node-jwks-rsa). The implementation per default verifies the token and if given the expiration.

- **JWT Payload:** Any verification of the token payload must be done over injecting a json schema for validation using [https://ajv.js.org/json-type-definition.html](https://ajv.js.org/json-type-definition.html).

- **Protocols:** [main/API.md#iauthorizeroptions](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/blob/main/API.md#iauthorizeroptions-)

- **Example usage with Rest Apigateway**

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt';

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

- **Using JWKS**

```typescript
new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  jwks: { 
    uri: 'https://example.auth0.com/.well-known/jwks.json'; 
    kid: 'REEyM0FBMDhFQkQ5QjY4Q0YzRjVGNzQ5OTU3RjUzN0FEREFFNzJGMg' 
  }
}});
```

- **Using asymmetric algorithms, e.g. public key**

```typescript
const myPublicKeyOneliner = '-----BEGIN PUBLIC KEY---\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKuTfz7kpJHPrmcmgx4Xf4GMoM2kK4mh\nMpSOW3qu1zZA1wfMHV8PS0Kds0nXMB6mmHk/Ke1\Et68aEspQRIn1aLcCAwEAAQ==\n-----END PUBLIC KEY-----';

new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  secret: myPublicKeyOneliner
}});
``` 

- **Using symmetric algorithms, same key for sign and verify :warning:**

<small>**Attention:** the key might be exposed during deploy, in the runtime etc.<small>

```typescript
const mySymmetricSecret = 'sharedSecret';

new TokenAuthorizerJwtFunction(stack, 'example-stack', { authorizerOptions: { 
  secret: mySymmetricSecret
}});
```

🍻
