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
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
// const inventorySchema = new Schema<Inventory>({
//   quantity: {
//     type: Number,
//     default: 0,
//   },
//   inStock: {
//     type: Boolean,
//     default: false,
//   },
// });
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Description is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    tags: {
        type: [String],
        required: [true, "Tags is required"],
    },
    variants: {
        type: [variantSchema],
        required: [true, "Variants is required"],
    },
    inventory: {
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: true },
    },
});
// pre save middleware/ hook 
productSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(this, 'pre hook : we will save  data');
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const user = this; // doc
        next();
    });
});
// post save middleware / hook
productSchema.post('save', function (doc, next) {
    // console.log(this, 'post hook : we will save  data');
    next();
});
//creating a custom static method
productSchema.statics.isUserExists = function (productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.Product.findOne({ productId });
        return existingUser;
    });
};
exports.Product = (0, mongoose_1.model)("Product", productSchema);
