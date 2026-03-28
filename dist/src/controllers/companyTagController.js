"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTagFromCompany = exports.getAllCompanyTags = exports.createCompanyTag = void 0;
const companyTag_1 = require("../models/companyTag");
//Create new 
const createCompanyTag = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save Product in the database 
    const product = Object.assign({}, req.body);
    companyTag_1.CompanyTag.create(product)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "Tag attached to company",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened attach" + err.message,
            payload: null,
        });
    });
};
exports.createCompanyTag = createCompanyTag;
// Get all
const getAllCompanyTags = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    companyTag_1.CompanyTag.findAll({
    //attributes:{ exclude: ['tagId', 'companyId'] },
    //include: [{ model: Company, attributes: ['id', 'name']}, { model: Tag, attributes: ['id', 'name']}]
    })
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Relationships successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all relationships. " + err.message,
            payload: null,
        });
    });
};
exports.getAllCompanyTags = getAllCompanyTags;
///Delete
const deleteTagFromCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield companyTag_1.CompanyTag.destroy({ where: { id } });
        res.status(200).json({ message: "Company's tag deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting the company's tag",
            error,
        });
    }
});
exports.deleteTagFromCompany = deleteTagFromCompany;
//# sourceMappingURL=companyTagController.js.map