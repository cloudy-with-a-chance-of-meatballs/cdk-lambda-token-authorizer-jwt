//go:build no_runtime_type_checking

// cdk-lambda-token-authorizer-jwt
package cdklambdatokenauthorizerjwt

// Building without runtime type checking enabled, so all the below just return nil

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateAddEnvironmentParameters(key *string, value *string, options *awslambda.EnvironmentOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateAddEventSourceParameters(source awslambda.IEventSource) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateAddEventSourceMappingParameters(id *string, options *awslambda.EventSourceMappingOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateAddPermissionParameters(id *string, permission *awslambda.Permission) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateAddToRolePolicyParameters(statement awsiam.PolicyStatement) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateApplyRemovalPolicyParameters(policy awscdk.RemovalPolicy) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateConfigureAsyncInvokeParameters(options *awslambda.EventInvokeConfigOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateGetResourceArnAttributeParameters(arnAttr *string, arnComponents *awscdk.ArnComponents) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateGetResourceNameAttributeParameters(nameAttr *string) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateGrantInvokeParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateMetricParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateMetricDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateMetricErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateMetricInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (t *jsiiProxy_TokenAuthorizerJwtFunction) validateMetricThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_ClassifyVersionPropertyParameters(propertyName *string, locked *bool) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_FromFunctionArnParameters(scope constructs.Construct, id *string, functionArn *string) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_FromFunctionAttributesParameters(scope constructs.Construct, id *string, attrs *awslambda.FunctionAttributes) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_IsConstructParameters(x interface{}) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_IsResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateTokenAuthorizerJwtFunction_MetricAllUnreservedConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateNewTokenAuthorizerJwtFunctionParameters(scope constructs.Construct, id *string, props *awslambda.FunctionOptions) error {
	return nil
}

