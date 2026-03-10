
import {Table, Model, Column, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript'; 
import {Optional} from 'sequelize'; 

interface ProductAttributes{ 
  id: number; 
  nombre: string;
  contact_email: string;
  contact_phone: string;
  ubicacion: string;
} 

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{} 

@Table ({ 
  tableName: "Empresas" 
}) 

export class Product extends Model<ProductAttributes, ProductCreationAttributes>{ 

   @Column 
   nombre!: string; 

   @Column({ 
      type: DataType.STRING 
   }) 
   contact_email?: string; 
   
   @Column
   contact_phone?: string;

   @Column
   ubicacion?: string;

   @CreatedAt 
   @Column 
   createdAt!: Date; 

   @UpdatedAt 
   @Column 
   updatedAt!: Date; 
} 