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
exports.deleteTag = exports.modifyTag = exports.getTagById = exports.getAllTagsWithoutCompanies = exports.getAlltags = exports.createTag = void 0;
const company_1 = require("../models/company");
const tag_1 = require("../models/tag");
//Create new tag
const createTag = (req, res) => {
    //Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save tag in the database 
    const tag = Object.assign({}, req.body);
    tag_1.Tag.create(tag)
        .then((data) => {
        res.status(200).json({
            status: "success",
            message: "Tag successfully registered",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened registering the tag" + err.message,
            payload: null,
        });
    });
};
exports.createTag = createTag;
// Get all tags using Promises
const getAlltags = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    tag_1.Tag.findAll({
        //attributes:{ exclude: }
        include: [{
                model: company_1.Company,
                //through: {attributes: []}
                attributes: ['name']
            }]
    })
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Tags successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all tags. " + err.message,
            payload: null,
        });
    });
};
exports.getAlltags = getAlltags;
// Get all tags using Promises
const getAllTagsWithoutCompanies = (req, res) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query. 
    tag_1.Tag.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Tags successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all tags. " + err.message,
            payload: null,
        });
    });
};
exports.getAllTagsWithoutCompanies = getAllTagsWithoutCompanies;
/// Get Tag by Id 
const getTagById = (req, res) => {
    //
    tag_1.Tag.findByPk(Number(req.params.id), {
        //attributes:{ exclude: }
        include: [{
                model: company_1.Company,
                //through: {attributes: []}
                attributes: ['name']
            }]
    })
        .then((data) => {
        return res.status(200).json({
            status: "success",
            message: "Tag successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving the tag. " + err.message,
            payload: null,
        });
    });
};
exports.getTagById = getTagById;
///Modify Tag 
const modifyTag = (req, res) => {
    // Validate request 
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Tag in the database 
    tag_1.Tag.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Tag successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the Tag. ",
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
exports.modifyTag = modifyTag;
///Delete Tag
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield tag_1.Tag.destroy({ where: { id } });
        res.status(200).json({ message: "Tag deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting the Tag",
            error,
        });
    }
});
exports.deleteTag = deleteTag;
//# sourceMappingURL=tagController.js.map