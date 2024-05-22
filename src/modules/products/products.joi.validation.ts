import Joi from "joi";

const variantSchema = Joi.object({
  type: Joi.string().required().messages({
    "string.base": `"type" should be a type of 'text'`,
    "string.empty": `"type" cannot be an empty field`,
    "any.required": `"type" is a required field`,
  }),
  value: Joi.string().required().messages({
    "string.base": `"value" should be a type of 'text'`,
    "string.empty": `"value" cannot be an empty field`,
    "any.required": `"value" is a required field`,
  }),
});

const inventorySchema = Joi.object({
  quantity: Joi.number().default(0).messages({
    "number.base": `"quantity" should be a type of 'number'`,
  }),
  inStock: Joi.boolean().default(false).messages({
    "boolean.base": `"inStock" should be a type of 'boolean'`,
  }),
});

const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "any.required": `"name" is a required field`,
  }),
  description: Joi.string().required().messages({
    "string.base": `"description" should be a type of 'text'`,
    "string.empty": `"description" cannot be an empty field`,
    "any.required": `"description" is a required field`,
  }),
  price: Joi.number().default(0).messages({
    "number.base": `"price" should be a type of 'number'`,
  }),
  category: Joi.string().required().messages({
    "string.base": `"category" should be a type of 'text'`,
    "string.empty": `"category" cannot be an empty field`,
    "any.required": `"category" is a required field`,
  }),
  tags: Joi.array().items(Joi.string()).required().messages({
    "array.base": `"tags" should be an array`,
    "any.required": `"tags" is a required field`,
  }),
  variants: Joi.array().items(variantSchema).required().messages({
    "array.base": `"variants" should be an array`,
    "any.required": `"variants" is a required field`,
  }),
  inventory: inventorySchema.required().messages({
    "any.required": `"inventory" is a required field`,
  }),
});

export default productValidationSchema;
