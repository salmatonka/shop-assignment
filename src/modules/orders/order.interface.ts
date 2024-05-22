import { Model } from "mongoose";

export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

export interface OrderModel extends Model<TOrder> {
  isUserExists(id: string): Promise<TOrder | null>;
}
