import { Request, Response } from "express";
import { Product } from "./products.model";
import { ProductServices } from "./products.service";

const createProduct =  async (req:Request, res:Response)=>{
    //   res.send('hello')
    // console.log((req.body))
    const productData = req.body;
    const result = await Product.create(productData);

    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
      })
    
    
    }


    const getAllProducts = async (req: Request, res: Response) => {
        try {
          const result = await ProductServices.getAllProducts();
      
          res.status(200).json({
            success: true,
            message: "Products fetched successfully !",
            data: result,
          })
        } catch (err) {
          res.status(500).json({
            success: false,
            message: "Could not fetch product!",
            error: err,
          });
        }
      };


      const getProductById = async (req: Request, res: Response) => {
        try {
          const { productId} = req.params;
          const result = await ProductServices.getProductById(productId);
      
          res.status(200).json({
            success: true,
            message: "Product are fetched successfully !",
            data: result,
          })
        } catch (err) {
          res.status(500).json({
            success: false,
            message: "Could not fetch product!",
            error: err,
          });
        }
      };







    export const ProductContrallers = {
        createProduct,
        getAllProducts,
        getProductById
        
    }