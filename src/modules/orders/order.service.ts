import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (ordertData:TOrder)=> {
  const result = await Order.create(ordertData);
  return result;
};

const getAllOrdersFromDB = async (email: string) => {
  if (email) {
    const result = await Order.find({ email });
    return result;
  }
  const result = await Order.find({});
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
