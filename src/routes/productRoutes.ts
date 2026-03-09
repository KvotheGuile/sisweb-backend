
import { Router, Request, Response } from 'express';  

import { createProduct, deleteProduct,  getAllProducts,  getProductById,  modifyProduct} from '../controllers/productController';

const productRouter:Router = Router();  

productRouter.get('/getallproducts', getAllProducts);  

productRouter.get('/getproduct/:id', getProductById);  

productRouter.post('/createproduct/:id', createProduct);  

productRouter.patch('/updateproduct/:id', modifyProduct);  

productRouter.delete('/deleteproduct/:id', deleteProduct);  

export default productRouter; 

