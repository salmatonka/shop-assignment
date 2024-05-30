"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const orderValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'string.email': 'Invalid email format',
        'any.required': 'Email is required',
    }),
    productId: joi_1.default.string().required().messages({
        'any.required': 'ProductId is required',
    }),
    price: joi_1.default.number().required().messages({
        'number.base': 'Price must be a number',
        'any.required': 'Price is required',
    }),
    quantity: joi_1.default.number().integer().min(1).required().messages({
        'number.base': 'Quantity must be a number',
        'number.integer': 'Quantity must be an integer',
        'number.min': 'Quantity must be at least 1',
        'any.required': 'Quantity is required',
    }),
});
exports.orderValidationSchema = orderValidationSchema;
