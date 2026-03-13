import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Tag } from './tag';
interface CompanyAttributes {
    id: number;
    name: string;
    contact_email: string;
    contact_phone: string;
    location: string;
}
interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'> {
}
export declare class Company extends Model<CompanyAttributes, CompanyCreationAttributes> {
    name: string;
    contact_email?: string;
    contact_phone?: string;
    location?: string;
    createdAt: Date;
    updatedAt: Date;
    roles?: Tag[];
}
export {};
//# sourceMappingURL=company.d.ts.map