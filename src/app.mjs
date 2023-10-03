//importar express
import express from 'express'
import config from './config'

import vehiclesRoutes from './routes/vehicles.routes'



//inicializar express (ejecuta el modulo express)
const app = express();



// let conexion = mysql.createConnection({})


//configurar el puerto
//settings (si existe la variable port utilicela si no utilice el puerto 3000   que se encuentra en el archivo index.js) 
app.set('port', config.port)

//recibir datos en json
//middlewares
app.use(express.json())
//recibir datos desde formularios HTML
app.use(express.urlencoded({ extended: false} ));
app.use(vehiclesRoutes);
app.use(express.static("frontend"));



export default app