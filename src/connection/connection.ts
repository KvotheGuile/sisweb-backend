import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize({ 
  database: 'sisweb_db', 
  dialect: 'postgres',
  username: '<username>', 
  password: '<password>', 
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