"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
//aqui estaran las consultas de la base de datos

var queries = {
  getAllVehicle: 'SELECT * FROM IC_entrada',
  addNewVehicle: "INSERT INTO IC_entrada(fecha_ingreso, numero_serie, placa_vehiculo,foto_placa, foto_contenedor, foto_sello, nombre_audit) VALUES (@fecha_ingreso, @numero_serie, @placa_vehiculo, @foto_placa, @foto_contenedor, @foto_sello, @nombre_audit)",
  getProductById: 'SELECT * FROM IC_entrada WHERE ID =@ID',
  deleteProductById: 'DELETE FROM IC_entrada WHERE ID =@ID',
  getTotalVehicles: 'SELECT COUNT(*) FROM IC_entrada',
  updateVehicleById: 'UPDATE IC_entrada SET fecha_ingreso = @fecha_ingreso, numero_serie = @numero_serie, placa_vehiculo = @placa_vehiculo, foto_placa = @foto_placa, foto_contenedor = @foto_contenedor, foto_sello = @foto_sello, nombre_audit = @nombre_audit WHERE ID = @ID'
};
exports.queries = queries;