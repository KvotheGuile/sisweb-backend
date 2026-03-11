import { CompanyTag } from "./companyTag";
import { Company } from "./company";
import { Tag } from "./tag";

Company.belongsToMany(Tag, { through: CompanyTag, foreignKey: 'companyId' });
Tag.belongsToMany(Company, { through: CompanyTag, foreignKey: 'tagId' });