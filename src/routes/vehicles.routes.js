//aquí estarán los nombres de las URL
import { Router } from 'express'
import { createNewVehicles, getVehicles, getProductById, deleteProductById, getTotalVehicles, updateVehicleById } from '../controllers/vehicles.controller'

const router = Router()
//obtener datos
router.get('/vehicles', getVehicles);

//crear
router.post('/postvehicles', createNewVehicles);

//Total Vehicles
router.get('/vehicles/count', getTotalVehicles);

//obtener producto por id
router.get('/vehicles/:id', getProductById);

//Eliminar
router.delete('/vehicles/:id', deleteProductById);


//actualizar
router.put('/vehicles/:id', updateVehicleById);




export default router;