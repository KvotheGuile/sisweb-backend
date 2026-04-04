
import {Table, Model, Column, DataType, HasMany} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Product } from './product';

interface CategoryAttributes{ 
  categoryId: number; 
  title: string; 
} 

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'categoryId'>{} 

@Table ({ 
  tableName: "Categories" 
}) 
export class Category extends Model<CategoryAttributes, CategoryCreationAttributes>{ 

   @Column 
   title!: string; 

   @HasMany(() => Product)
   declare products?: Product[];
} 