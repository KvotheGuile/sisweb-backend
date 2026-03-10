import { RequestHandler, Request, Response } from "express";
import { Company } from "../models/company"; 
 

//Create new company
export const createCompany: RequestHandler = (req: Request, res: Response) => { 
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
  Company.create(product) 
    .then((data: Company | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Company successfully registered", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened registering a company" + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Get all Companies using Promises
export const getAllCompanies: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   Company.findAll() 
   .then((data: Company[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Companies successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all companies. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 
 
/// Get Company by Id 
export const getCompanyById: RequestHandler = (req: Request, res: Response) => { 
  //
  Company.findByPk(Number(req.params.id)) 
  .then((data: Company | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Company successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving the company. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 
 

///Modify Company 
export const modifyCompany:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save Company in the database 
  Company.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "Company successfully updated", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Something happened updating the Company. ", 
        payload: null, 
    }); 
   } 
  }) 
  .catch((err) => { 
    res.status(500).json({ 
      status: "error", 
      message: "Something happened updating a product. " + err.message, 
      payload: null, 
  }); 
}); 
}; 
 
///Delete Company
export const deleteCompany: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const { id } = req.body; 
    try { 
      await Company.destroy({ where: { id } }); 
      res.status(200).json({ message: "Company deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting the Company", 
        error, 
      }); 
    } 
}; 

