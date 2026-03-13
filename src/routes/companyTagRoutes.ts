
import { Router, Request, Response } from 'express';  

import { getAllCompanyTags } from '../controllers/companyTagController';

const companyTagRouter:Router = Router();

companyTagRouter.get('/', getAllCompanyTags);

export default companyTagRouter;