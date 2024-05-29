import { TProduct } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (productData: TProduct) => {
  if (await Product.isUserExists(productData.name)) {
    throw new Error("User already exists!");
  }

  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async (searchTerm: string) => {
  let find = {}
  
  if(searchTerm!=undefined && searchTerm != ''){
    find = {
      $or: [
        { name: { $regex: new RegExp(searchTerm, "i") } },
        { category: { $regex: new RegExp(searchTerm, "i") } },
        { description: { $regex: new RegExp(searchTerm, "i") } },
      ],
    }
  }
  const result = await Product.find(find);
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
  const result = await Product.findByIdAndUpdate(productId, product, {new: true,}).select({ __v: 0 });
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



export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteByProductIdFromDB,
  updateProductFromDB,
  deleteAllProductsFromDB
}
