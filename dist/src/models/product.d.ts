import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Category } from './category';
interface ProductAttributes {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    categoryId: number;
}
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {
}
export declare class Product extends Model<ProductAttributes, ProductCreationAttributes> {
    title: string;
    description?: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    categoryId: number | null;
    category?: Category | null;
}
export {};
//# sourceMappingURL=product.d.ts.map