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
const deleteByorderIdFromDB = async (orderId: string) => {
  const result = await Order.findByIdAndDelete(orderId).select({ __v: 0 });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  deleteByorderIdFromDB
};
