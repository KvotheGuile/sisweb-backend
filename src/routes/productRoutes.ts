
import { Router, Request, Response } from 'express';  

import { createProduct, deleteProduct,  getAllProducts,  getProductById,  modifyProduct} from '../controllers/productController';

const productRouter:Router = Router();  

productRouter.get('/getallproducts', getAllProducts);  

productRouter.get('/getproduct/:id', getProductById);  

productRouter.post('/createproduct', createProduct);  

productRouter.patch('/updateproduct/:id', modifyProduct);  

productRouter.delete('/deleteproduct', deleteProduct);  

export default productRouter; 

