"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _vehicles = require("../controllers/vehicles.controller");
//aquí estarán los nombres de las URL

var router = (0, _express.Router)();
//obtener datos
router.get('/vehicles', _vehicles.getVehicles);

//crear
router.post('/vehicles', _vehicles.createNewVehicles);

//Total Vehicles
router.get('/vehicles/count', _vehicles.getTotalVehicles);

//obtener producto por id
router.get('/vehicles/:id', _vehicles.getProductById);

//Eliminar
router["delete"]('/vehicles/:id', _vehicles.deleteProductById);

//actualizar
router.put('/vehicles/:id', _vehicles.updateVehicleById);
var _default = router;
exports["default"] = _default;