// import express from "express";
// import { OrderContrallers } from "./order.controller";

// const router= express.Router();

// router.post('/',OrderContrallers.createOrders);

// export const OrderRoutes = router;

import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrders);

export const OrderRoutes = router;
