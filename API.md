# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenAuthorizerJwtFunction <a name="TokenAuthorizerJwtFunction" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction"></a>

#### Initializers <a name="Initializers" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

new TokenAuthorizerJwtFunction(scope: Construct, id: string, props: FunctionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionOptions</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |

---

##### `toString` <a name="toString" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSource"></a>

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

###### `source`<sup>Required</sup> <a name="source" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias"></a>

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

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

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

###### `x`<sup>Required</sup> <a name="x" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isOwnedResource"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.latestVersion"></a>

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

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.logGroup"></a>

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

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---





