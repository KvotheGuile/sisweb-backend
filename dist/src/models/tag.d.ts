import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Company } from './company';
interface TagAttributes {
    id: number;
    name: string;
    category: number;
}
interface TagCreationAttributes extends Optional<TagAttributes, 'id'> {
}
export declare class Tag extends Model<TagAttributes, TagCreationAttributes> {
    name: string;
    category: number;
    roles?: Company[];
}
export {};
//# sourceMappingURL=tag.d.ts.map