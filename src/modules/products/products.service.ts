import { TProduct } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (productData: TProduct) => {
  if (await Product.isUserExists(productData.name)) {
    throw new Error("User already exists!");
  }

  const result = await Product.create(productData);
  return result;

  // const result = await product.save(); //build in method
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductFromDB = async (_id: string) => {
  if (await Product.isUserExists(_id)) {
    throw new Error("User already exists!");
  }
  const result = await Product.findByIdAndUpdate({ _id });
  return result;
};

const deleteProductFromDB = async (_id: string) => {
  const result = await Product.deleteOne({ _id });
  return result;
};

const searchProductFromDB = async (query: object) => {
  const result = await Product.find(query);
  console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
  searchProductFromDB,
};
