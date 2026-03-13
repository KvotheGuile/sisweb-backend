"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyTagController_1 = require("../controllers/companyTagController");
const companyTagRouter = (0, express_1.Router)();
companyTagRouter.get('/', companyTagController_1.getAllCompanyTags);
companyTagRouter.post('/', companyTagController_1.createCompanyTag);
exports.default = companyTagRouter;
//# sourceMappingURL=companyTagRoutes.js.map