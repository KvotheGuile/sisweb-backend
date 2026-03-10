
import { Router, Request, Response } from 'express';  

import { createCompany, deleteCompany,  getAllCompanies,  getCompanyById,  modifyCompany} from '../controllers/companyController';

const companyRouter:Router = Router();  

companyRouter.get('/getallcompanies', getAllCompanies);  

companyRouter.get('/getcompany/:id', getCompanyById);  

companyRouter.post('/createcompany', createCompany);  

companyRouter.patch('/updatecompany/:id', modifyCompany);  

companyRouter.delete('/deletecompany', deleteCompany);  

export default companyRouter; 

