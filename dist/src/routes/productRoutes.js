"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const productRouter = (0, express_1.Router)();
productRouter.get('/getallproducts', productController_1.getAllProducts);
productRouter.get('/getproduct/:id', productController_1.getProductById);
productRouter.post('/createproduct', productController_1.createProduct);
productRouter.patch('/updateproduct/:id', productController_1.modifyProduct);
productRouter.delete('/deleteproduct', productController_1.deleteProduct);
exports.default = productRouter;
//# sourceMappingURL=productRoutes.js.map