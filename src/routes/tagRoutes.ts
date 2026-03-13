

import { Router, Request, Response } from 'express';  
import { createTag, getTagById, getAlltags, modifyTag, deleteTag } from '../controllers/tagController';

const tagRouter:Router = Router();  

tagRouter.get('/', getAlltags);
tagRouter.get('/:id', getTagById);
tagRouter.post('/', createTag);
tagRouter.patch('/:id', modifyTag);
tagRouter.delete('/', deleteTag);

export default tagRouter;