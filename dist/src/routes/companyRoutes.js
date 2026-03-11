"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = require("../controllers/companyController");
const companyRouter = (0, express_1.Router)();
companyRouter.get('/getallcompanies', companyController_1.getAllCompanies);
companyRouter.get('/getcompany/:id', companyController_1.getCompanyById);
companyRouter.post('/createcompany', companyController_1.createCompany);
companyRouter.patch('/updatecompany/:id', companyController_1.modifyCompany);
companyRouter.delete('/deletecompany', companyController_1.deleteCompany);
exports.default = companyRouter;
//# sourceMappingURL=companyRoutes.js.map