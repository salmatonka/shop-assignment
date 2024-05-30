"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const products_model_1 = require("../products/products.model");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    productId: {
        type: String,
        required: [true, 'ProductId is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
});
//Middleware for decrease the product quantity after an order place
orderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            const product = yield products_model_1.Product.findById(this.productId);
            if (product) {
                if (((_a = product.inventory) === null || _a === void 0 ? void 0 : _a.quantity) > 0 &&
                    ((_b = product.inventory) === null || _b === void 0 ? void 0 : _b.quantity) >= this.quantity) {
                    // Decrease the product quantity
                    product.inventory.quantity -= this.quantity;
                    // Update inStock status if the quantity becomes 0
                    if (product.inventory.quantity === 0) {
                        product.inventory.inStock = false;
                    }
                    product.save();
                    next();
                }
                else {
                    throw new Error('Insufficient quantity available in inventory');
                }
            }
            else {
                throw new Error('Product not found');
            }
        }
        catch (err) {
            next(err);
        }
    });
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
