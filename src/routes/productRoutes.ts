
import { Router, Request, Response } from 'express';  
const productRouter:Router = Router();  

productRouter.get('/getallproducts', (req:Request, res:Response) => {  
res.send('Get a list of products')  
});  

productRouter.get('/getproduct/:id', (req:Request, res:Response) => {  
res.send(`Get the product ${req.params.id}`)  
});  

productRouter.post('/createproduct/:id', (req:Request, res:Response) => {
    res.send(`Create a new product with ID: ${req.params.id}`) 
    //res.send(`Create a new product with ID: ${req.body.id}`)  
});  

productRouter.patch('/updateproduct/:id', (req:Request, res:Response) => {  
    res.send(`Update the product ${req.params.id}`)  
    //res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`)  
});  

productRouter.delete('/deleteproduct/:id', (req:Request, res:Response) => {  
    res.send(`Deleting the product ${req.params.id}`)  
    //res.send(`Deleting the product ${req.body.id}`)  
});  

export default productRouter; 

