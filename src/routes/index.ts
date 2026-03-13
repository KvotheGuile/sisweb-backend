import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';  
import companyRouter from './companyRoutes';
import tagRouter from './tagRoutes';

const apiRouter:Router = Router();  

apiRouter.use('/product', productRoutes);  
apiRouter.use('/company', companyRouter);
apiRouter.use('/tag', tagRouter);

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 