import Ajv, { JTDDataType } from 'ajv/dist/jtd';

import { AJV_VALIDATOR_DEFAULT_OPTIONS, FnErrorConstants } from './const';

class JwtPayloadValidationError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = FnErrorConstants.Validation;
    Object.setPrototypeOf(this, JwtPayloadValidationError.prototype);
  }
}

const ajv = new Ajv({ ...AJV_VALIDATOR_DEFAULT_OPTIONS });

const validateJwtPayloadAgainstJsonSchema = (payload: any, schemaAsJson: string) : any => {
  const schema    = JSON.parse(schemaAsJson);
  type schemaType = JTDDataType<typeof schema>;
  const validate  = ajv.compile<schemaType>(schema);
  if (validate(payload)) return payload;
  throw new JwtPayloadValidationError(JSON.stringify(validate.errors));
};

export { validateJwtPayloadAgainstJsonSchema };