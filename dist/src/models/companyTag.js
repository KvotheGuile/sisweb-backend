"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTag = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const company_1 = require("./company");
const tag_1 = require("./tag");
let CompanyTag = class CompanyTag extends sequelize_typescript_1.Model {
};
exports.CompanyTag = CompanyTag;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => company_1.Company),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CompanyTag.prototype, "companyId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => company_1.Company, { foreignKey: "id" }),
    __metadata("design:type", Object)
], CompanyTag.prototype, "company", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tag_1.Tag),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CompanyTag.prototype, "tagId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => tag_1.Tag, { foreignKey: "id" }),
    __metadata("design:type", Object)
], CompanyTag.prototype, "tag", void 0);
exports.CompanyTag = CompanyTag = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'CompanyTags'
    })
], CompanyTag);
/*
Company.belongsToMany(Tag, { through: CompanyTag, foreignKey: 'companyId' });
Tag.belongsToMany(Company, { through: CompanyTag, foreignKey: 'tagId' });//*/ 
//# sourceMappingURL=companyTag.js.map