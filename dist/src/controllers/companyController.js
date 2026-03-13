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
exports.deleteCompany = exports.modifyCompany = exports.getCompanyById = exports.getAllCompanies = exports.createCompany = void 0;
const company_1 = require("../models/company");
const tag_1 = require("../models/tag");
//Create new company
const createCompany = (req, res) => {
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
    company_1.Company.create(product)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "Company successfully registered",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened registering a company" + err.message,
            payload: null,
        });
    });
};
exports.createCompany = createCompany;
// Get all Companies using Promises
const getAllCompanies = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    company_1.Company.findAll({
        //attributes:{ exclude: }
        include: [{
                model: tag_1.Tag,
                through: {
                    attributes: []
                } // ['id', 'name', 'category']
            }]
    })
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Companies successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all companies. " + err.message,
            payload: null,
        });
    });
};
exports.getAllCompanies = getAllCompanies;
/// Get Company by Id 
const getCompanyById = (req, res) => {
    //
    company_1.Company.findByPk(Number(req.params.id))
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Company successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving the company. " + err.message,
            payload: null,
        });
    });
};
exports.getCompanyById = getCompanyById;
///Modify Company 
const modifyCompany = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Company in the database 
    company_1.Company.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Company successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the Company. ",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + err.message,
            payload: null,
        });
    });
};
exports.modifyCompany = modifyCompany;
///Delete Company
const deleteCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield company_1.Company.destroy({ where: { id } });
        res.status(200).json({ message: "Company deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting the Company",
            error,
        });
    }
});
exports.deleteCompany = deleteCompany;
//# sourceMappingURL=companyController.js.map