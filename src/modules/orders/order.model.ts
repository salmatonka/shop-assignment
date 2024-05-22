import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../products/products.model";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  productId: {
    type: String,
    required: [true, "ProductId is required"],
  },
  price: {
    type: Number,
    // default:0
    required: [true, "Price is required"],
  },
  quantity: { type: Number, required: [true, "Quantity is required"] },
});

//Middleware for decrease the product quantity after an order place
orderSchema.pre<TOrder>("save", async function (next) {
  try {
    const product = await Product.findById(this.productId);
    if (product) {
      if (
        product.inventory?.quantity > 0 &&
        product.inventory?.quantity >= this.quantity
      ) {
        // Decrease the product quantity
        product.inventory.quantity -= this.quantity;
        // Update inStock status if the quantity becomes 0
        if (product.inventory.quantity === 0) {
          product.inventory.inStock = false;
        }
        product.save();
        next();
      } else {
        throw new Error("Insufficient quantity available in inventory");
      }
    } else {
      throw new Error("Product not found");
    }
  } catch (err: any) {
    next(err);
  }
});

export const Order = model<TOrder>("Order", orderSchema);
