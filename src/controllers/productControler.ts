import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product"; 
 

//Create new product 
export const createProduct: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty", 
      payload: null, 
    }); 
  } 
   
// Save Product in the database 
  const product = { ...req.body }; 
  Product.create(product) 
    .then((data: Product | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Product successfully created", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened creating a product. " + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Get all products using Promises
export const getAllProducts: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   Product.findAll() 
   .then((data: Product[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Products successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all products. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 
 
// Find a single Product with an id 
export const getProductById: RequestHandler = (req: Request, res: Response) => { 
 
   
}; 
 
// Update a Product by the id in the request 
export const modifyProduct: RequestHandler = async (req: Request,res: Response) => { 
 
  
}; 
 
// Delete a Product with the specified id in the request 
export const deleteProduct: RequestHandler = async (req: Request,res: Response) => { 
 
  
}; 