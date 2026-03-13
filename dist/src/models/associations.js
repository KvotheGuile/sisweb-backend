"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relationAssociation = relationAssociation;
const companyTag_1 = require("./companyTag");
const company_1 = require("./company");
const tag_1 = require("./tag");
function relationAssociation() {
    company_1.Company.belongsToMany(tag_1.Tag, { through: companyTag_1.CompanyTag, foreignKey: 'companyId' });
    tag_1.Tag.belongsToMany(company_1.Company, { through: companyTag_1.CompanyTag, foreignKey: 'tagId' });
}
//# sourceMappingURL=associations.js.map