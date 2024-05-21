// import { InProduct } from "./products.interface";
// import { ProductModel } from "./products.model";

import { Product } from "./products.interface";
import ProductModel from "./products.model";



// // const createProduct = async (payLoad: InProduct) => {
// //   const result = await Product.create(payLoad);
// //   return result;
// // };

// const createStudentIntoDB = async (product: InProduct) => {
//   console.log('product created:',product)
//   const result = await ProductModel.create(product);
//   // if (await Product.isUserExists) {
//   //   throw new Error('User already exists!');
//   // }
//   // const result = await Product.create(productData);
//   return result;
// };

// const getAllProducts = async () => {
//   const result = await ProductModel.find();
//   return result;
// };

// const getProductById = async (id: string) => {
//   const result = await ProductModel.findById(id);
//   return result;
// };

// export const ProductServices = {
//   createStudentIntoDB,
//   getAllProducts,
//   getProductById,
// };

const createProductIntoDB = async (product:Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// const updateProductFromDB = async (id: string) => {
//   const result = await ProductModel.findById(id);
//   return result;
// };

export const ProductServices= {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB
}