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

    if (result) {
      res.status(200).send({
        success: true,
        message: 'Product created successfully!',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not created!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Something is wrong',
      error: err,
    })

  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    if (result) {
      res.status(200).send({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Products not found!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Something is wrong',
      error: err,
    })

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

    if (result) {
      res.status(200).send({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not found!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Something is wrong',
      error: err,
    })

  }
};

//todo

const updateProduct = async (req: Request, res: Response) => {

  try {
    const { productId } = req.params;
    const product = req.body;

    const { error } = productValidationSchema.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const result = await ProductServices.updateProductFromDB(productId,product);

    if (result) {
      res.status(200).send({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not found to update!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Something is wrong',
      error: err,
    })

  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteByProductIdFromDB(productId);

    if (result) {
      res.status(200).send({
        success: true,
        message: 'Product deleted successfully!',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not found to delete!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Something is wrong',
      error: err,
    })
  }
};

const deleteAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.deleteAllProductsFromDB()
    if (result) {
      res.status(200).send({
        success: true,
        message: 'All products are deleted successfully!',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Products not found to delete!',
        data: result,
      })
    }
  } catch (err: any) {
    res.status(400).send({
      success: false,
      message: err.message || 'Something is wrong',
      error: err,
    })
  }
}


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
  deleteAllProducts,
  updateProduct,
  searchProduct,
};
