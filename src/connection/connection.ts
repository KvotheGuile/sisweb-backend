import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product"; 
import { Company } from "../models/company";
import { Tag } from "../models/tag";
import { CompanyTag } from "../models/companyTag";
import { relationAssociation } from "../models/associations";
import { Category } from "../models/category";

//import * as dotenv from 'dotenv';

const { loadEnvFile } = require('node:process');
loadEnvFile('.env');

const userID = process.env.USERNAME_SQL ?? "unknown";
const userPassword = process.env.PASSWORD_SQL ?? "unknown";

console.log(`username: ${userID}, password: ${userPassword}`);

const connection = new Sequelize({ 
  database: 'sisweb_db', 
  dialect: 'postgres',
  username: userID, 
  password: userPassword, 
  storage: ':memory:', 
  
  models: [ 
  Product,
  Company,
  Tag,
  CompanyTag,
  Category
  ], 
  define: {
    timestamps: false
  }

}); 

relationAssociation();

async function connectionDB(){ 
try{ 
await connection.sync(); 
}catch(e){ 
console.log(e); 
} 
} 
export default connectionDB; 