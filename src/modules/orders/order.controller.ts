import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationSchema } from "./order.validation";


const createOrder = async (req: Request, res: Response) => {
  const { orders: ordertData } = req.body;
  console.log( ordertData);

  try {

    const  {value,}  = orderValidationSchema.validate(ordertData);
    const result = await OrderServices.createOrderIntoDB(value);


    if (result) {
      res.status(200).send({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } else {
      res.status(400).send({
        success: false,
        message: "Order not created!",
        result,
      });
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: "Something is wrong",
      error: err,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const result = await OrderServices.getAllOrdersFromDB(email as string);

    if (email && result) {
      res.status(200).send({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(400).send({
      success: false,
      message: "Something is wrong",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
