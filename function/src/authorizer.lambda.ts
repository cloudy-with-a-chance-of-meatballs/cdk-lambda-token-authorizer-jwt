import {
  AwsApigatewayRestTokenAuthorizerJwt,
  ITokenAuthorizerOptions,
} from "@cloudy-with-a-chance-of-meatballs/aws-apigateway-rest-token-authorizer-jwt";

export { ITokenAuthorizerOptions } from "@cloudy-with-a-chance-of-meatballs/aws-apigateway-rest-token-authorizer-jwt";

import { AuthResponse, APIGatewayTokenAuthorizerEvent } from "aws-lambda";

const authorizer = new AwsApigatewayRestTokenAuthorizerJwt();

enum FnEnvVars {
  JwksUri = "TOKEN_AUTHORIZER_JWKS_URI",
  JwksKid = "TOKEN_AUTHORIZER_JWKS_KID",
  Secret = "TOKEN_AUTHORIZER_JWT_VERIFICATION_SECRET",
  Schema = "TOKEN_AUTHORIZER_JWT_VALIDATOR_SCHEMA_JSON",
}

enum FnErrorConstants {
  JwksKid = "MISSING_JWKS_KID",
  ConfigEnv = "MISSING_PROCESS_ENV_VARIABLES",
}

// handle event
export const authHandler = async (event: APIGatewayTokenAuthorizerEvent): Promise<AuthResponse> => {
  const envSecret = process.env[FnEnvVars.Secret] || "";
  const jwksUri = process.env[FnEnvVars.JwksUri] || "";
  const jwksKid = process.env[FnEnvVars.JwksKid] || "";
  const validation = process.env[FnEnvVars.Schema] || "";

  if (!envSecret && !jwksUri) throw new Error(FnErrorConstants.ConfigEnv);
  if (jwksUri && !jwksKid) throw new Error(FnErrorConstants.JwksKid);

  let options: ITokenAuthorizerOptions = {
    verificationStrategy: {
      strategyName: "argument",
      secret: envSecret || "foobar",
    },
    ...(validation ? { payloadValidationStrategy: { strategyName: "schema", schema: validation } } : {}),
  };

  if (jwksUri && jwksKid) {
    return authorizer.getAuthResponse(event, {
      ...options,
      verificationStrategy: {
        strategyName: "jwksFromUriByKid",
        uri: jwksUri,
        kid: jwksKid,
      },
    });
  }
  return authorizer.getAuthResponse(event, options);
};
