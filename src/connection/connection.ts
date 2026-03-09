import { Sequelize } from "sequelize-typescript";
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

async function connectionDB() {
  try {
    await connection.authenticate(); // authenticate verifica la conexión
    console.log("Conexión exitosa a la base de datos MySQL.");
    await connection.sync();
  } catch (e) {
    console.log("Error al conectar con la base de datos:", e);
  }
}

export default connectionDB;