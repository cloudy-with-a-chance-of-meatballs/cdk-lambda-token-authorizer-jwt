import jwks from 'jwks-rsa';
import { Secret } from 'jsonwebtoken';

import { 
  JWKS_CLIENT_DEFAULT_OPTIONS,
  FnErrorConstants
} from './const';

const getPublicKeyFromJwksUri = async (jwksUri: string, jwksKid: string) : Promise<Secret> => {  
  try {
    // try to fetch the jwks.json
    const jwksClient = jwks({ jwksUri: jwksUri, ...JWKS_CLIENT_DEFAULT_OPTIONS });
    const jwksKey   = await jwksClient.getSigningKey(jwksKid);
    const publicKey = await jwksKey.getPublicKey();
    //return found key
    return publicKey;
  } catch (e) {
    throw new Error(FnErrorConstants.JwksPrefix + (e as Error).name.toUpperCase());
  }
}

export { getPublicKeyFromJwksUri };