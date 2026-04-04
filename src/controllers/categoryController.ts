import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product"; 
import { Category } from "../models/category";

//Create new category 
export const createCategory: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty", 
      payload: null, 
    }); 
  } 
   
// Save Category in the database 
  const category = { ...req.body }; 
  Category.create(category) 
    .then((data: Category | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Category successfully created", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened creating a category. " + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Get all categories using Promises
export const getAllCategories: RequestHandler = (req: Request, res: Response) => { 
   
   Category.findAll() 
   .then((data: Category[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Categories successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all categories. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 
 
/// Get categories by Id 
export const getCategoryById: RequestHandler = (req: Request, res: Response) => { 
  //
  Category.findByPk(Number(req.params.id)) 
  .then((data: Category | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Categories successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving all categories. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 
 

///Modify category 
export const modifyCategory:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

    // Save Category in the database 
  Category.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "Category successfully updated", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Something happened updating the category. ", 
        payload: null, 
    }); 
   } 
  }) 
  .catch((err) => { 
    res.status(500).json({ 
      status: "error", 
      message: "Something happened updating a category. " + err.message, 
      payload: null, 
  }); 
}); 
}; 
 
///Delete category
export const deleteCategory: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const { id } = req.body; 
    try { 
      await Category.destroy({ where: { id } }); 
      res.status(200).json({ message: "Category deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting categories", 
        error, 
      }); 
    } 
}; 

