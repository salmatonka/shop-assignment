// import { Request, Response } from "express";
// // import { Product } from "./products.model";
// import { ProductServices } from "./products.service";
// // import { productValitationSchema } from "../../utils/validation";

import { Request, Response } from "express";
import { ProductServices } from "./products.service";
// import { error } from "console";

// // import { z } from "zod";
// import { productValidationSchema } from "../../utils/validation";
// import { InProduct } from "./products.interface";

// const createProduct = async (req: Request, res: Response) => {
//   //   res.send('hello')
//   // console.log((req.body))
//   //

//   try {
//     const  product: InProduct  = req.body;
//     console.log(product)

// const result = await ProductServices.createStudentIntoDB(product);

//     // const validatedProductData = productValidationSchema.parse(productData);
//     // console.log(validatedProductData);
//     // const result = await ProductServices.createStudentIntoDB(validatedProductData);
//     // await product.save();
//     res.status(200).json({
//       success: true,
//       message: "Product created successfully!",
//       data: result
//     });
//   } catch (error) {
//     console.log(error)
//   }
// };

// const getAllProducts = async (req: Request, res: Response) => {
//   try {
//     const result = await ProductServices.getAllProducts();

//     res.status(200).json({
//       success: true,
//       message: "Products fetched successfully !",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch product!",
//       error: err,
//     });
//   }
// };

// const getProductById = async (req: Request, res: Response) => {
//   try {
//     const { productId } = req.params;
//     const result = await ProductServices.getProductById(productId);

//     res.status(200).json({
//       success: true,
//       message: "Product are fetched successfully !",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Could not fetch product!",
//       error: err,
//     });
//   }
// };

// export const ProductContrallers = {
//   createProduct,
//   getAllProducts,
//   getProductById,
// };



const createProduct = async (req:Request, res:Response)=>{
  try{
    const { product:productData } = req.body;
    console.log(productData)
    const result = await ProductServices.createProductIntoDB(productData)

  res.status(200).json({
    success: true,
       message: "Product created successfully!",
       data: result
  })
  }catch(error){
    console.log(error)
  }

}


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
    const  { productId } = req.params;
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




export const ProductContrallers ={
  createProduct,
  getAllProducts,
  getSingleProduct
}



