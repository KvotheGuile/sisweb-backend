import { RequestHandler, Request, Response } from "express";
import { Company } from "../models/company"; 
import { Tag } from "../models/tag";
import { CompanyTag } from "../models/companyTag";

//Create new tag
export const createTag: RequestHandler = (req: Request, res: Response) => { 
  //Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty", 
      payload: null, 
    }); 
  } 
   
// Save tag in the database 
  const tag = { ...req.body }; 
  Tag.create(tag) 
    .then((data: Tag | null) => { 
      res.status(200).json({ 
        status: "success", 
        message: "Tag successfully registered", 
        payload: data, 
      }); 
    }) 
    .catch((err) => { 
       res.status(500).json({ 
         status: "error", 
         message: "Something happened registering the tag" + err.message, 
         payload: null, 
       }); 
    }); 
}; 


 
// Get all tags using Promises
export const getAlltags: RequestHandler = (req: Request, res: Response) => { 
  //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
   
   Tag.findAll(
    {
      //attributes:{ exclude: }
      include: [{
        model: Company, 
        //through: {attributes: []}
        attributes: ['name']
      }]
      
    }
   ) 
   .then((data: Tag[]) => { 
      return res.status(200).json({ 
         status: "success", 
           message: "Tags successfully retrieved", 
           payload: data, 
      }); 
    }) 
    .catch((err) => { 
       return res.status(500).json({ 
       status: "error", 
       message: "Something happened retrieving all tags. " + err.message, 
       payload: null, 
    }); 
  }); 
}; 
 
/// Get Tag by Id 
export const getTagById: RequestHandler = (req: Request, res: Response) => { 
  //
  Tag.findByPk(Number(req.params.id)) 
  .then((data: Tag | null) => { 
    return res.status(200).json({ 
      status: "success", 
      message: "Tag successfully retrieved", 
      payload: data, 
    }); 
  }) 
  .catch((err) => { 
    return res.status(500).json({ 
      status: "error", 
      message: "Something happened retrieving the tag. " + err.message, 
      payload: null, 
    }); 
  }); 
}; 
 

///Modify Tag 
export const modifyTag:RequestHandler = (req: Request, res: Response) => { 
  // Validate request 
  if (!req.body) { 
    return res.status(400).json({ 
      status: "error", 
      message: "Content can not be empty.", 
      payload: null, 
    }); 
  } 

// Save Tag in the database 
  Tag.update({ ...req.body }, { where: { id: req.params.id } }) 
  .then((isUpdated) => { 
    if (isUpdated) { 
      return res.status(200).json({ 
        status: "success", 
        message: "Tag successfully updated", 
        payload: { ...req.body }, 
      }); 
    } else { 
      return res.status(500).json({ 
        status: "error", 
        message: "Something happened updating the Tag. ", 
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
 
///Delete Tag
export const deleteTag: RequestHandler = async (req: Request, res: Response): Promise<void> => { 
    const { id } = req.body; 
    try { 
      await Tag.destroy({ where: { id } }); 
      res.status(200).json({ message: "Tag deleted" }); 
    } catch (error) { 
      res.status(500).json({ 
        message: "Error deleting the Tag", 
        error, 
      }); 
    } 
}; 

