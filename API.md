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
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
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

##### `grantInvoke` <a name="grantInvoke" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.grantInvoke.parameter.grantee"></a>

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
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct"></a>

```typescript
import { TokenAuthorizerJwtFunction } from 'cdk-lambda-token-authorizer-jwt'

TokenAuthorizerJwtFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

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
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ associated with this Lambda Function (this is an optional attribute). |
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

The DLQ associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


## Structs <a name="Structs" id="Structs"></a>

### TokenAuthorizerJwtFunctionProps <a name="TokenAuthorizerJwtFunctionProps" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps"></a>

#### Initializer <a name="Initializer" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.Initializer"></a>

```typescript
import { TokenAuthorizerJwtFunctionProps } from 'cdk-lambda-token-authorizer-jwt'

const tokenAuthorizerJwtFunctionProps: TokenAuthorizerJwtFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.tracingOption">tracingOption</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | *No description.* |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.environment"></a>

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

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `events`<sup>Optional</sup> <a name="events" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.layers"></a>

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

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.logRetention"></a>

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

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.memorySize"></a>

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

##### `profiling`<sup>Optional</sup> <a name="profiling" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.role"></a>

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

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

Only used if 'vpc' is supplied. Note: internet access for Lambdas
requires a NAT gateway, so picking Public subnets is not allowed.

---

##### `tracingOption`<sup>Optional</sup> <a name="tracingOption" id="cdk-lambda-token-authorizer-jwt.TokenAuthorizerJwtFunctionProps.property.tracingOption"></a>

```typescript
public readonly tracingOption: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing

---



