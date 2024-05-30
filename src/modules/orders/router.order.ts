import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrders);
router.get("/:orderId", OrderControllers.deleteProduct);

export const OrderRoutes = router;
