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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductContrallers = void 0;
const products_service_1 = require("./products.service");
const products_joi_validation_1 = __importDefault(require("./products.joi.validation"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //crating a schema validation using joi
        const { product: productData } = req.body;
        // console.log(productData)
        //data validation using joi
        const { value } = products_joi_validation_1.default.validate(productData);
        // console.log(error,value)
        const result = yield products_service_1.ProductServices.createProductIntoDB(value);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Product created successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Product not created!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    try {
        const result = yield products_service_1.ProductServices.getAllProductsFromDB(searchTerm);
        if (searchTerm) {
            res.status(200).send({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: result,
            });
            return;
        }
        if (result) {
            res.status(200).send({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Products not found!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const result = yield products_service_1.ProductServices.getSingleProductFromDB(productId);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Product not found!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
//todo
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const product = req.body;
        const { error } = products_joi_validation_1.default.validate(req.body);
        if (error) {
            return res
                .status(400)
                .json({ success: false, message: error.details[0].message });
        }
        const result = yield products_service_1.ProductServices.updateProductFromDB(productId, product);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Product updated successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Product not found to update!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield products_service_1.ProductServices.deleteByProductIdFromDB(productId);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Product deleted successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Product not found to delete!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
const deleteAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductServices.deleteAllProductsFromDB();
        if (result) {
            res.status(200).send({
                success: true,
                message: "All products are deleted successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Products not found to delete!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: err.message || "Something is wrong",
            error: err,
        });
    }
});
exports.ProductContrallers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    deleteAllProducts,
    updateProduct
};
