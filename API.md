# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthorizerJwtFunction <a name="TokenAuthorizerJwtFunction" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction"></a>

#### Initializers <a name="Initializers" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

new TokenAuthorizerJwtFunction(scope: Construct, id: string, props: TokenAuthorizerFunctionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions">TokenAuthorizerFunctionOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions">TokenAuthorizerFunctionOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the @aws-cdk/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from '@aws-cdk/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
   aliasName: 'Live',
   version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### `isConstruct` <a name="isConstruct" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isOwnedResource"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { TokenAuthorizerJwtFunction } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


## Structs <a name="Structs" id="Structs"></a>

### TokenAuthorizerFunctionOptions <a name="TokenAuthorizerFunctionOptions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions"></a>

#### Initializer <a name="Initializer" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.Initializer"></a>

```typescript
import { TokenAuthorizerFunctionOptions } from '@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt'

const tokenAuthorizerFunctionOptions: TokenAuthorizerFunctionOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.tokenAuthorizerOptions">tokenAuthorizerOptions</a></code> | <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions">ITokenAuthorizerOptions</a></code> | *No description.* |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `tokenAuthorizerOptions`<sup>Required</sup> <a name="tokenAuthorizerOptions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.TokenAuthorizerFunctionOptions.property.tokenAuthorizerOptions"></a>

```typescript
public readonly tokenAuthorizerOptions: ITokenAuthorizerOptions;
```

- *Type:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions">ITokenAuthorizerOptions</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ITokenAuthorizerOptions <a name="ITokenAuthorizerOptions" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions"></a>

- *Implemented By:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions">ITokenAuthorizerOptions</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions.property.verificationStrategy">verificationStrategy</a></code> | <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument">ITokenVerificationStrategyArgument</a> \| <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid">ITokenVerificationStrategyJwksFromUriByKid</a></code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions.property.payloadValidationStrategy">payloadValidationStrategy</a></code> | <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator">ITokenValidationStrategyAjvJsonSchemaValidator</a></code> | *No description.* |

---

##### `verificationStrategy`<sup>Required</sup> <a name="verificationStrategy" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions.property.verificationStrategy"></a>

```typescript
public readonly verificationStrategy: ITokenVerificationStrategyArgument | ITokenVerificationStrategyJwksFromUriByKid;
```

- *Type:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument">ITokenVerificationStrategyArgument</a> | <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid">ITokenVerificationStrategyJwksFromUriByKid</a>

---

##### `payloadValidationStrategy`<sup>Optional</sup> <a name="payloadValidationStrategy" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenAuthorizerOptions.property.payloadValidationStrategy"></a>

```typescript
public readonly payloadValidationStrategy: ITokenValidationStrategyAjvJsonSchemaValidator;
```

- *Type:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator">ITokenValidationStrategyAjvJsonSchemaValidator</a>

---

### ITokenValidationStrategyAjvJsonSchemaValidator <a name="ITokenValidationStrategyAjvJsonSchemaValidator" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator"></a>

- *Implemented By:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator">ITokenValidationStrategyAjvJsonSchemaValidator</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator.property.strategyName">strategyName</a></code> | <code>string</code> | *No description.* |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenValidationStrategyAjvJsonSchemaValidator.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

---

### ITokenVerificationStrategyArgument <a name="ITokenVerificationStrategyArgument" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument"></a>

- *Implemented By:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument">ITokenVerificationStrategyArgument</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument.property.strategyName">strategyName</a></code> | <code>string</code> | *No description.* |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyArgument.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

---

### ITokenVerificationStrategyJwksFromUriByKid <a name="ITokenVerificationStrategyJwksFromUriByKid" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid"></a>

- *Implemented By:* <a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid">ITokenVerificationStrategyJwksFromUriByKid</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid.property.kid">kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid.property.strategyName">strategyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid.property.kid"></a>

```typescript
public readonly kid: string;
```

- *Type:* string

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cloudy-with-a-chance-of-meatballs/cdk-lambda-token-authorizer-jwt.ITokenVerificationStrategyJwksFromUriByKid.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

