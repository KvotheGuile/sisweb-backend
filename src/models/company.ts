
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, BelongsToMany} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 
import { Tag } from './tag';
import { CompanyTag } from './companyTag';

interface CompanyAttributes{ 
  id: number; 
  name: string;
  contact_email: string;
  contact_phone: string;
  location: string;
} 

interface CompanyCreationAttributes extends Optional<CompanyAttributes, 'id'>{} 

@Table ({ 
  tableName: "Companies" 
}) 

export class Company extends Model<CompanyAttributes, CompanyCreationAttributes>{ 

   @Column 
   name!: string; 

   @Column({ 
      type: DataType.STRING 
   }) 
   contact_email?: string; 
   
   @Column
   contact_phone?: string;

   @Column
   location?: string;

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 

  @BelongsToMany(() => Tag, () => CompanyTag)
  roles!: Tag[];

} 