"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post("/", products_controller_1.ProductContrallers.createProduct);
router.get("/", products_controller_1.ProductContrallers.getAllProducts);
router.get("/:productId", products_controller_1.ProductContrallers.getSingleProduct);
router.put("/:productId", products_controller_1.ProductContrallers.updateProduct);
router.delete("/:productId", products_controller_1.ProductContrallers.deleteProduct);
router.delete("/", products_controller_1.ProductContrallers.deleteAllProducts);
exports.ProductRoutes = router;
