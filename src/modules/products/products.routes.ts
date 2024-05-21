import express from "express";
import { ProductContrallers } from "./products.controller";
const router = express.Router();

router.post('/', ProductContrallers.createProduct)
router.get('/', ProductContrallers.getAllProducts)
router.get('/:productId', ProductContrallers.getProductById)


export const ProductRoutes = router;
