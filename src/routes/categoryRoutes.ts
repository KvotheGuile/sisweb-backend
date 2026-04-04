
import { Router, Request, Response } from 'express';  
import { createCategory, deleteCategory, getAllCategories, getCategoryById, modifyCategory } from '../controllers/categoryController';

const categoryRouter:Router = Router();  

categoryRouter.get('/', getAllCategories);  

categoryRouter.get('/:id', getCategoryById);  

categoryRouter.post('/', createCategory);  

categoryRouter.patch('/:id', modifyCategory);  

categoryRouter.delete('/', deleteCategory);  

export default categoryRouter; 

