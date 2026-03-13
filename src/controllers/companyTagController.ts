import { RequestHandler, Request, Response } from "express";
import { Company } from "../models/company"; 
import { Tag } from "../models/tag";
import { CompanyTag } from "../models/companyTag";
import { Model } from "sequelize";

//Create new 
export const createCompanyTag: RequestHandler = (req: Request, res: Response) => { 
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
  CompanyTag.create(product) 
    .then((data: CompanyTag | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Tag attached to company", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened attach" + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Get all
export const getAllCompanyTags: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   CompanyTag.findAll(
    {
      //attributes:{ exclude: ['tagId', 'companyId'] },
      //include: [{ model: Company, attributes: ['id', 'name']}, { model: Tag, attributes: ['id', 'name']}]
    }
   ) 
   .then((data: CompanyTag[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Relationships successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all relationships. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 

///Delete
export const deleteTagFromCompany: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const { id } = req.body; 
    try { 
      await CompanyTag.destroy({ where: { id } }); 
      res.status(200).json({ message: "Company's tag deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting the company's tag", 
        error, 
      }); 
    } 
}; 

