import { TProduct } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (productData: TProduct) => {
  if (await Product.isUserExists(productData.name)) {
    throw new Error("User already exists!");
  }

  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find({});
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId).select({ __v: 0 });
  return result;
};

const updateProductFromDB = async (
  productId: string,
  product: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  }).select({ __v: 0 });
  return result;
};

const deleteByProductIdFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId).select({ __v: 0 });
  return result;
};

const deleteAllProductsFromDB = async () => {
  const result = await Product.deleteMany({});
  return result;
};

const searchProductFromDB = async (query: object) => {
  const result = await Product.find(query);
  // console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteByProductIdFromDB,
  updateProductFromDB,
  deleteAllProductsFromDB,
  searchProductFromDB,
};
