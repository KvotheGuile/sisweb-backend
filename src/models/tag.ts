
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, BelongsToMany} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Company } from './company';
import { CompanyTag } from './companyTag';

interface TagAttributes{ 
  id: number; 
  name: string;
  category: number;
} 

interface TagCreationAttributes extends Optional<TagAttributes, 'id'>{} 

@Table ({ 
  tableName: "Tags" 
}) 

export class Tag extends Model<TagAttributes, TagCreationAttributes>{ 

   @Column 
   name!: string; 
   
   @Column
   category!: number;

   @BelongsToMany(() => Company, () => CompanyTag)
   roles!: Company[];

} 