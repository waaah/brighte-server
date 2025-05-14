import Joi from "joi";
import { ServiceTypes } from "../../types/service-type";

export const registerLeadValidator = Joi.object({
  name: Joi.string(),
  mobile: Joi.string()
    .pattern(/^\+?[0-9]\d{1,14}$/)
    .messages({ "string.pattern.base": "Please provide a valid mobile." }),
  email: Joi.string()
    .email()
    .messages({ "string.email": "Please provide a valid email." }),
  postcode: Joi.string(),
  services: Joi.array().items(
    Joi.string()
      .valid(...Object.values(ServiceTypes))
      .messages({
        "any.only": `A service can only be ${Object.values(ServiceTypes).join(",")}`,
      })
  ),
});
