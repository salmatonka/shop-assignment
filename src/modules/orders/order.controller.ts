import { Request, Response } from 'express';
import { orderValidationSchema } from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {

        const { order:ordertData } = req.body;
        
        const result = await OrderServices.createOrderIntoDB(ordertData);
        // return result;
        if (result) {
            res.status(200).send({
              success: true,
              message: 'Order created successfully!',
              data: result,
            })
          } else {
            res.status(400).send({
              success: false,
              message: 'Order not created!',
              result,
            })
          }
        } catch (err: any) {
          res.status(400).send({
            success: false,
            message: err.message || 'Something is wrong',
            error: err,
          })
        }
};

const getAllOrders = async (req: Request, res: Response) => {
    const { email } = req.query;
    try {
      const result = await OrderServices.getAllOrdersFromDB(email as string);
  
      if (email && result) {
        res.status(200).send({
          success: true,
          message: 'Orders fetched successfully for user email!',
          data: result,
        })
      } else {
        res.status(200).send({
          success: true,
          message: 'Orders fetched successfully!',
          data: result,
        })
      }
    } catch (err: any) {
      res.status(400).send({
        success: false,
        message: err.message || 'Something is wrong',
        error: err,
      })
    }
  };
  
  


export const OrderControllers = {
  createOrder,
  getAllOrders
};
