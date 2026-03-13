import { Model } from 'sequelize-typescript';
import { Company } from './company';
export declare class CompanyTag extends Model<CompanyTag> {
    companyId: number;
    company?: Company | null;
    tagId: number;
    tag?: Company | null;
}
//# sourceMappingURL=companyTag.d.ts.map