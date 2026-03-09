import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product"; 

//import * as dotenv from 'dotenv';

const { loadEnvFile } = require('node:process');
loadEnvFile('../../.env');

const userID = process.env.USERNAME ?? "";
const userPassword = process.env.PASSWORD ?? "";

const connection = new Sequelize({ 
  database: 'sisweb_db', 
  dialect: 'postgres',
  username: userID, 
  password: userPassword, 
  storage: ':memory:', 
  models: [ ] 
}); 



async function connectionDB(){ 
try{ 
await connection.sync(); 
}catch(e){ 
console.log(e); 
} 
} 
export default connectionDB; 