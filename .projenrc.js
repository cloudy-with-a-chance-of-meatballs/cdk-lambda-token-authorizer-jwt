
const { awscdk, typescript } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'cfuerst',
  authorAddress: 'c.fuerst@gmail.com',
  cdkVersion: '2.5.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-lambda-token-authorizer-jwt',
  repositoryUrl: 'https://github.com/cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.git',
  stability: 'experimental',
  license: 'MIT',
  keywords: ['aws', 'cdk', 'lambda', 'apigateway', 'rest', 'api', 'jwt', 'tokenauthorizer', 'jwks'],
  peerDependency: [
    'aws-cdk-lib',
    'constructs',
  ],
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
  python: {
    distName: 'cloudy-with-a-chance-of-meatballs.cdk-lambda-token-authorizer-jwt',
    module: 'cloudy_with_a_chance_of_meatballs_cdk_lambda_token_authorizer_jwt',
  },
  dotnet: {
    dotNetNamespace: 'CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt',
    packageId: 'CloudyWithAchanceOfMeatballs.CdkLambdaTokenAuthorizerJwt',
  },
  publishToMaven: {
    mavenEndpoint: 'https://s01.oss.sonatype.org',
    mavenGroupId: "io.github.cloudy-with-a-chance-of-meatballs",
    mavenArtifactId: "cdk-lambda-token-authorizer-jwt",
    javaPackage: "io.github.cloudy-with-a-chance-of-meatballs.cdk.lambda_token_authorizer_jwt",
  },
});

project.setScript('cdk', 'cdk');

project.synth();

const fn = new typescript.TypeScriptProject({
  parent: project,
  outdir: 'function',
  authorName: 'Christian Fürst',
  authorEmail: 'c.fuerst@gmail.com',
  license: 'MIT',
  name: `@cloudy-with-a-chance-of-meatballs/${project.name}`,
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
