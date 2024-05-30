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
exports.ProductServices = void 0;
const products_model_1 = require("./products.model");
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield products_model_1.Product.isUserExists(productData.name)) {
        throw new Error("User already exists!");
    }
    const result = yield products_model_1.Product.create(productData);
    return result;
});
const getAllProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let find = {};
    if (searchTerm != undefined && searchTerm != '') {
        find = {
            $or: [
                { name: { $regex: new RegExp(searchTerm, "i") } },
                { category: { $regex: new RegExp(searchTerm, "i") } },
                { description: { $regex: new RegExp(searchTerm, "i") } },
            ],
        };
    }
    const result = yield products_model_1.Product.find(find);
    return result;
});
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findById(productId).select({ __v: 0 });
    return result;
});
const updateProductFromDB = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndUpdate(productId, product, { new: true, }).select({ __v: 0 });
    return result;
});
const deleteByProductIdFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.findByIdAndDelete(productId).select({ __v: 0 });
    return result;
});
const deleteAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.Product.deleteMany({});
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    deleteByProductIdFromDB,
    updateProductFromDB,
    deleteAllProductsFromDB
};
