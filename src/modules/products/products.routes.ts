import express from "express";
import { ProductContrallers } from "./products.controller";

const router = express.Router()

router.post('/',ProductContrallers.createProduct)
router.get('/:productId',ProductContrallers.getSingleProduct)
router.get('/',ProductContrallers.getAllProducts)

export const ProductRoutes = router;
