import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product"; 
 
 
// Create and Save a new Product 
export const createProduct: RequestHandler = (req: Request, res: Response) => { 
 
 
   
} 
 
// Retrieve all Products from the database. 
export const getAllProducts: RequestHandler = (req: Request, res: Response) => { 
 
  
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