const { awscdk, typescript, javascript } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'cfuerst',
  authorAddress: 'c.fuerst@gmail.com',
  cdkVersion: '2.5.0',
  defaultReleaseBranch: 'main',
  name: '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt',
  repositoryUrl: 'https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.git',
  description: 'Add a lambda function to your aws-rest-api-gateway which can be used as a token authorizer',
  stability: 'experimental',
  license: 'MIT',
  keywords: ['aws', 'cdk', 'lambda', 'apigateway', 'rest', 'api', 'jwt', 'tokenauthorizer', 'jwks', 'authorizer', 'token'],
  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
  npmAccess: javascript.NpmAccess.PUBLIC,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['dependabot[bot]'],
    secret: 'PROJEN_GITHUB_TOKEN',
  },
  dependabot: true,
  dependabotOptions: {
    labels: ['auto-approve'],
  },
  codeCov: true,
  minNodeVersion: '16.18.1',
  python: {
    distName: 'cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt',
    module: 'cloudy_with_a_chance_of_meatballs_cdk_lambda_token_authorizer_jwt',
    classifiers: [
      'Programming Language :: Python :: 3.9',
    ],
  },
  dotnet: {
    dotNetNamespace: 'CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt',
    packageId: 'CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt',
  },
  jestOptions: {
    extraCliOptions: ['--testMatch "**/*.test.ts"'],
  },
  gitignore: ['.idea/'],
});

new awscdk.LambdaFunction(project, {
  entrypoint: "function/src/index.ts",
  constructFile: "src/index.ts",
  constructName: "TokenAuthorizerJwtFunction",
  cdkDeps: project.cdkDeps,
});

project.setScript('force-rebuild', 'git clean -f -d -x && find . -type f -exec grep -l "Generated" {} \\; -exec rm -f {} \\;');

project.setScript('cdk', 'cdk');

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
    'jsonwebtoken',
    '@types/jsonwebtoken',
    'jwks-rsa',
    'ajv',
  ],
  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: { printWidth: 120 },
  },
});

fn.synth();
