
import { Router, Request, Response } from 'express';  

import { getAllCompanyTags, createCompanyTag } from '../controllers/companyTagController';

const companyTagRouter:Router = Router();

companyTagRouter.get('/', getAllCompanyTags);
companyTagRouter.post('/', createCompanyTag);

export default companyTagRouter;