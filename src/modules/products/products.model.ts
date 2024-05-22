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

import { Schema, model } from "mongoose";
import { ProductModel, TProduct } from "./products.interface";

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
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    default: 0,
  },
  inStock: {
    type: Boolean,
    default: false,
  },
});

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
    default: 0,
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
    type: [inventorySchema],
    required: [true, "Inventory is required"],
  },
});

// pre save middleware/ hook : will work on create()  save()
// productSchema.pre('save', async function (next) {
//   console.log(this, 'pre hook : we will save  data');
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   // const user = this; // doc
//   // hashing password and save into DB
//   // user.password = await bcrypt.hash(
//   //   user.password,
//   //   Number(config.bcrypt_salt_rounds),
//   // );
//   next();
// });

// post save middleware / hook
// productSchema.post('save', function (doc, next) {
//   console.log(this, 'post hook : we will save  data');
//   // doc.password = '';
//   next();
// });

//creating a custom static method
productSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Product.findOne({ id });
  return existingUser;
};

export const Product = model<TProduct, ProductModel>("Product", productSchema);
