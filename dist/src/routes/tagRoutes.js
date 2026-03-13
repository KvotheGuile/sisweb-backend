"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tagController_1 = require("../controllers/tagController");
const tagRouter = (0, express_1.Router)();
tagRouter.get('/simple', tagController_1.getAllTagsWithoutCompanies);
tagRouter.get('/', tagController_1.getAlltags);
tagRouter.get('/:id', tagController_1.getTagById);
tagRouter.post('/', tagController_1.createTag);
tagRouter.patch('/:id', tagController_1.modifyTag);
tagRouter.delete('/', tagController_1.deleteTag);
exports.default = tagRouter;
//# sourceMappingURL=tagRoutes.js.map