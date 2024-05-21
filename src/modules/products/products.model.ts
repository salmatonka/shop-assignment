import { Schema, model } from "mongoose";
import { InProduct, Inventory, Variants } from "./products.interface";

const variantSchema = new Schema<Variants>({
    type:  {
        type: String,
        required: true,
      },
    value: {
        type: String,
        required: true,
      },
})

const InventorySchema = new Schema<Inventory>({
    quantity: {
        type: Number,
        default: 0,
      },
    inStock:{
        type: Boolean,
        default: false,
      }
})

const productSchema = new Schema<InProduct>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    price:  {
        type: Number,
        default: 0,
      },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    tags: {
        type:[String],
        required: [true, "Tags is required"]
    },
    variants: [variantSchema],
    inventory: [InventorySchema],
})

export const Product = model('Product', productSchema)