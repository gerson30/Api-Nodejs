//modulo de conexion de mssql
import sql from 'mssql'
import config from '../config'

//datos de servidor
const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    options: {
        encrypt: true, //for azure
        trustServerCertificate: true, //cambiar a true para dev local / certs autofirmados
    },
};

//crear funcion para conectar atraves de parametros a la base de datos y realizar peticiones con los query y mostrar resultado.
export async function getConnection() {
    try{
        const pool = await sql.connect(dbSettings);
        return pool; 
    }catch(error){
        console.error(error);
    }
}

//exportat sql para que otros modulos lo utilicen
export {sql};