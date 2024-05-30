"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const variantSchema = joi_1.default.object({
    type: joi_1.default.string().required().messages({
        "string.base": `"type" should be a type of 'text'`,
        "string.empty": `"type" cannot be an empty field`,
        "any.required": `"type" is a required field`,
    }),
    value: joi_1.default.string().required().messages({
        "string.base": `"value" should be a type of 'text'`,
        "string.empty": `"value" cannot be an empty field`,
        "any.required": `"value" is a required field`,
    }),
});
const inventorySchema = joi_1.default.object({
    quantity: joi_1.default.number().default(0).messages({
        "number.base": `"quantity" should be a type of 'number'`,
    }),
    inStock: joi_1.default.boolean().default(false).messages({
        "boolean.base": `"inStock" should be a type of 'boolean'`,
    }),
});
const productValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        "string.base": `"name" should be a type of 'text'`,
        "string.empty": `"name" cannot be an empty field`,
        "any.required": `"name" is a required field`,
    }),
    description: joi_1.default.string().required().messages({
        "string.base": `"description" should be a type of 'text'`,
        "string.empty": `"description" cannot be an empty field`,
        "any.required": `"description" is a required field`,
    }),
    price: joi_1.default.number().default(0).messages({
        "number.base": `"price" should be a type of 'number'`,
    }),
    category: joi_1.default.string().required().messages({
        "string.base": `"category" should be a type of 'text'`,
        "string.empty": `"category" cannot be an empty field`,
        "any.required": `"category" is a required field`,
    }),
    tags: joi_1.default.array().items(joi_1.default.string()).required().messages({
        "array.base": `"tags" should be an array`,
        "any.required": `"tags" is a required field`,
    }),
    variants: joi_1.default.array().items(variantSchema).required().messages({
        "array.base": `"variants" should be an array`,
        "any.required": `"variants" is a required field`,
    }),
    inventory: inventorySchema.required().messages({
        "any.required": `"inventory" is a required field`,
    }),
});
exports.default = productValidationSchema;
