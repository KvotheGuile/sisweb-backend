"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get('/getallproducts', (req, res) => {
    res.send('Get a list of products');
});
productRouter.get('/getproduct/:id', (req, res) => {
    res.send(`Get the product ${req.params.id}`);
});
productRouter.post('/createproduct/:id', (req, res) => {
    res.send(`Create a new product with ID: ${req.params.id}`);
    //res.send(`Create a new product with ID: ${req.body.id}`)  
});
productRouter.patch('/updateproduct/:id', (req, res) => {
    res.send(`Update the product ${req.params.id}`);
    //res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`)  
});
productRouter.delete('/deleteproduct/:id', (req, res) => {
    res.send(`Deleting the product ${req.params.id}`);
    //res.send(`Deleting the product ${req.body.id}`)  
});
exports.default = productRouter;
//# sourceMappingURL=productRoutes.js.map