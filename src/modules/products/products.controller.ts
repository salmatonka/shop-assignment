import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import productValidationSchema from "./products.joi.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    //crating a schema validation using joi

    const { product: productData } = req.body;
    // console.log(productData)

    //data validation using joi

    const { value } = productValidationSchema.validate(productData);
    // console.log(error,value)

    const result = await ProductServices.createProductIntoDB(value);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Validation error....!",
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product!",
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { error } = productValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product are fetched successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product!",
      error: err,
    });
  }
};

//todo

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { error } = productValidationSchema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const result = await ProductServices.updateProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product updated successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product!",
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product are deleted successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product!",
      error: err,
    });
  }
};

//todo
const searchProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.searchProductFromDB({
      name: { $regex: searchTerm, $options: "i" },
    });

    res.status(200).json({
      success: true,
      message: "Products matching search term fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not match product!",
      error: err,
    });
  }
};

export const ProductContrallers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
};
