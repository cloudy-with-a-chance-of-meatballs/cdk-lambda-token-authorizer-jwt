const { awscdk, typescript, javascript } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'cfuerst',
  authorAddress: 'c.fuerst@gmail.com',
  cdkVersion: '2.5.0',
  defaultReleaseBranch: 'main',
  name: '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt',
  repositoryUrl:
    'https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.git',
  description:
    'Add a lambda function to your aws-rest-api-gateway which can be used as a token authorizer',
  stability: 'experimental',
  license: 'MIT',
  keywords: [
    'aws',
    'cdk',
    'lambda',
    'apigateway',
    'rest',
    'api',
    'jwt',
    'tokenauthorizer',
    'jwks',
    'authorizer',
    'token',
  ],
  deps: ['aws-cdk-lib', 'constructs'],
  npmAccess: javascript.NpmAccess.PUBLIC,
  dependabot: true,
  codeCov: true,
  minNodeVersion: '16.18.1',
  python: {
    distName:
      'cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt',
    module: 'cloudy_with_a_chance_of_meatballs_cdk_lambda_token_authorizer_jwt',
    classifiers: ['Programming Language :: Python :: 3.9'],
  },
  jestOptions: {
    extraCliOptions: ['--testMatch "**/*.test.ts"'],
  },
  gitignore: ['.idea/'],
  npmignore: ['/function/', '!/assets/function/'],
});

project.setScript('cdk', 'cdk');

new awscdk.LambdaFunction(project, {
  entrypoint: 'function/src/authorizer.lambda.ts',
  constructName: 'AuthorizerFunction',
  cdkDeps: project.cdkDeps,
  runtime: awscdk.LambdaRuntime.NODEJS_16_X,
});

project.synth();

const fn = new typescript.TypeScriptProject({
  parent: project,
  outdir: 'function',
  authorName: 'Christian Fürst',
  authorEmail: 'c.fuerst@gmail.com',
  authorOrganization: true,
  license: 'MIT',
  name: `${project.name}`,
  copyrightOwner: 'Christian Fürst',
  defaultReleaseBranch: 'main',
  deps: [
    '@types/aws-lambda',
    '@cloudy-with-a-chance-of-meatballs/aws-apigateway-rest-token-authorizer-jwt@^0.1.5',
    'json5@^2.2.2',
  ],
  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: { printWidth: 120 },
  },
  gitignore: ['src/authorizer-function.ts'],
});

fn.synth();
