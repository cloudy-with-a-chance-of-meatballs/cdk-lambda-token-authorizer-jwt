[![GitHub](https://img.shields.io/github/license/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt?style=flat-square)](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/blob/main/LICENSE)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt?sort=semver&style=flat-square)](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/releases)
[![npm (scoped)](https://img.shields.io/npm/v/cdk-lambda-token-authorizer-jwt?style=flat-square)](https://www.npmjs.com/package/cdk-lambda-token-authorizer-jwt)
[![PyPI](https://img.shields.io/pypi/v/cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt?style=flat-square)](https://pypi.org/project/cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt/)
[![Nuget](https://img.shields.io/nuget/v/CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt?style=flat-square)](https://www.nuget.org/packages/CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/release/main?label=release&style=flat-square)](https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/actions/workflows/release.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/10f0734997f4d96da662/maintainability)](https://codeclimate.com/github/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/maintainability)
[![codecov](https://codecov.io/gh/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt/branch/main/graph/badge.svg?token=86HXCCHOGJ)](https://codecov.io/gh/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt)

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
    const tokenAuthFunction = new TokenAuthorizerJwtFunction(this, 'lambdaFunctionName', {
      environment: { 
        // PROVIDE VARIABLES
        TOKEN_AUTHORIZER_JWKS_URI: 'https://example.auth0.com/.well-known/jwks.json',
        TOKEN_AUTHORIZER_JWKS_KID: 'SOME_KID_FROM_JWKS_RESPONSE',
        // OR
        TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET: 'A_PUBLIC_KEY_OR_SYMETRIC_SECRET'
      }
    });
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
