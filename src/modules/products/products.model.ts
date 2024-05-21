// import { Schema, model } from "mongoose";
// import { Product, Inventory, Variants } from "./products.interface";
// import { string } from "zod";
// import validator from "validator"; 
// const variantSchema = new Schema<Variants>({
//   type: {
//     type: String,
//     required: true,
//   },
//   value: {
//     type: String,
//     required: true,
//   },
// });

// const InventorySchema = new Schema<Inventory>({
//   quantity: {
//     type: Number,
//     default: 0,
//   },
//   inStock: {
//     type: Boolean,
//     default: false,
//   },
// });

// const productSchema = new Schema<Product>({
//   name: {
//     type: String,
//     required: [true, "Name is required"],
//   },
//   description: {
//     type: String,
//     required: [true, "Description is required"],
//   },
//   price: {
//     type: Number,
//     default: 0,
//   },
//   category: {
//     type: String,
//     required: [true, "Category is required"],
//   },
//   // tags: {
//   //   type: String,
//   //   enum: {
//   //     values: ["smartphone", "Apple", "iOS"],
//   //     message: "{VALUE} is not a valid tags",
//   //   },
//   //   required: [true, "Tags is required"],
//   // },
//   // tags: {
//   //   type: [String]
//   // },
//   tags: ["smartphone", "Apple", "iOS"],
//   variants: [variantSchema],
//   inventory: [InventorySchema],
// });

// export const ProductModel = model<Product>("Product", productSchema);


//npm i validator
//npm i -D @types/validator



import { Schema, model } from 'mongoose';

interface Variants {
  type: string;
  value: string;
}

interface Inventory {
  quantity: number;
  inStock: boolean;
}

interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [Variants];
  inventory: [Inventory];
}

const variantSchema = new Schema<Variants>({
  type:{ 
    type: String, 
    required: true 
  },
  value: {
     type: String,
      required: true
     }
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
     type: Number,
     default: 0 
    },
  inStock: {
     type: Boolean, 
     default: false
     }
});

const productSchema = new Schema<Product>({
  name: { 
    type: String,
     required: [true, "Name is required"]
     },
  description: {
     type: String,
      required: [true, "Description is required"]
    },
  price: { 
    type: Number, 
    default: 0, 
  },
  category: { 
    type: String,
     required: [true, "Category is required"]
    },
  tags: { 
    type: [String],
     required: [true, "Tags is required"] 
    },
  variants: { 
    type: [variantSchema],
     required: [true, "Variants is required"]
     },
  inventory: { 
    type: [inventorySchema],
     required: [true, "Inventory is required"] 
    }
});

const ProductModel = model<Product>('Product', productSchema);
export default ProductModel;
