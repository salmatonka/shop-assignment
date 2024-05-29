import { Schema, model } from "mongoose";
import { ProductModel, TProduct } from "./products.interface";

interface Variants {
  type: string;
  value: string;
}

// interface Inventory {
//   quantity: number;
//   inStock: boolean;
// }

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [Variants];
  inventory: { quantity: number; inStock: boolean };
}

const variantSchema = new Schema<Variants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

// const inventorySchema = new Schema<Inventory>({
//   quantity: {
//     type: Number,
//     default: 0,
//   },
//   inStock: {
//     type: Boolean,
//     default: false,
//   },
// });

const productSchema = new Schema<TProduct, ProductModel>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  tags: {
    type: [String],
    required: [true, "Tags is required"],
  },
  variants: {
    type: [variantSchema],
    required: [true, "Variants is required"],
  },
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

// pre save middleware/ hook 
productSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save  data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  
  next();
});

// post save middleware / hook
productSchema.post('save', function (doc, next) {
  // console.log(this, 'post hook : we will save  data');
  
  next();
});

//creating a custom static method
productSchema.statics.isUserExists = async function (productId: string) {
  const existingUser = await Product.findOne({ productId });
  return existingUser;
};

export const Product = model<TProduct, ProductModel>("Product", productSchema);
