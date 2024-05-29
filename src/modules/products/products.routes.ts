import express from "express";
import { ProductContrallers } from "./products.controller";

const router = express.Router();

router.post("/", ProductContrallers.createProduct);
router.get("/", ProductContrallers.getAllProducts);
router.get("/:productId", ProductContrallers.getSingleProduct);
router.put("/:productId", ProductContrallers.updateProduct);
router.delete("/:productId", ProductContrallers.deleteProduct);
router.delete("/", ProductContrallers.deleteAllProducts);

export const ProductRoutes = router;
