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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { orders: ordertData } = req.body;
    // console.log(ordertData);
    try {
        const { value } = order_validation_1.orderValidationSchema.validate(ordertData);
        console.log(value);
        const result = yield order_service_1.OrderServices.createOrderIntoDB(value);
        console.log(value);
        //   const { error } = orderValidationSchema.validate(ordertData);
        //  const result = await OrderServices.createOrderIntoDB(ordertData);
        if (result) {
            res.status(200).send({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: "Order not created!",
                result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: "Something is wrong",
            error: err,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const result = yield order_service_1.OrderServices.getAllOrdersFromDB(email);
        if (email && result) {
            res.status(200).send({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        }
        else {
            res.status(200).send({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: "Something is wrong",
            error: err,
        });
    }
});
// const deleteProduct = async (req: Request, res: Response) => {
//   try {
//     const { orderId } = req.params;
//     const result = await OrderServices.deleteByorderIdFromDB(orderId);
//     if (result) {
//       res.status(200).send({
//         success: true,
//         message: "Order deleted successfully!",
//         data: result,
//       });
//     } else {
//       res.status(400).send({
//         success: false,
//         message: "Order not found to delete!",
//         data: result,
//       });
//     }
//   } catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: err.message || "Something is wrong",
//       error: err,
//     });
//   }
// };
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    // deleteProduct
};
// https://shop-assignment-atdxtd7ah-salmatonkas-projects.vercel.app
// https://shop-assignment-drab.vercel.app
