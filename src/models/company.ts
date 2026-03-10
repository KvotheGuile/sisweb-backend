
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 

interface ProductAttributes{ 
  id: number; 
  name: string;
  contact_email: string;
  contact_phone: string;
  location: string;
} 

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{} 

@Table ({ 
  tableName: "Company" 
}) 

export class Product extends Model<ProductAttributes, ProductCreationAttributes>{ 

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
} 