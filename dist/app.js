"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_routes_1 = require("./modules/products/products.routes");
const cors_1 = __importDefault(require("cors"));
const router_order_1 = require("./modules/orders/router.order");
const dotenv_1 = __importDefault(require("dotenv"));
const global_error_1 = require("./modules/middleware/global.error");
const not_found_1 = require("./modules/middleware/not.found");
const app = (0, express_1.default)();
// const port = 3000
dotenv_1.default.config();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use("/api/products", products_routes_1.ProductRoutes);
app.use("/api/orders", router_order_1.OrderRoutes);
app.get("/", (req, res) => {
    res.status(200).send("Hello SR Shop -----");
});
// Error handler middleware
app.use(not_found_1.notFound);
app.use(global_error_1.errorHandler);
exports.default = app;
