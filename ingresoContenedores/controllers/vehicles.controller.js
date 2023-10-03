"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVehicleById = exports.getVehicles = exports.getTotalVehicles = exports.getProductById = exports.deleteProductById = exports.createNewVehicles = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = require("mssql");
var _database = require("../database");
//al visitar las rutas de product.routes se ejecutaran en este archivo

//se importa la conexion 

//importar los querys

//metodo para exporta los datos mediante un query
//METODO GET
var getVehicles = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();
          case 3:
            _pool = _context.sent;
            _context.next = 6;
            return _pool.request().query(_database.queries.getAllVehicle);
          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getVehicles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//metodo para agregar un nuevo registro
//METODO POST
exports.getVehicles = getVehicles;
var createNewVehicles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, fecha_ingreso, numero_serie, placa_vehiculo, foto_placa, foto_contenedor, foto_sello, nombre_audit, _pool2;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //recibir todos los datos del cliente
            _req$body = req.body, fecha_ingreso = _req$body.fecha_ingreso, numero_serie = _req$body.numero_serie, placa_vehiculo = _req$body.placa_vehiculo, foto_placa = _req$body.foto_placa, foto_contenedor = _req$body.foto_contenedor, foto_sello = _req$body.foto_sello, nombre_audit = _req$body.nombre_audit;
            if (!(fecha_ingreso == null || numero_serie == null || placa_vehiculo == null || foto_placa == null || foto_contenedor == null || foto_sello == null || nombre_audit == null)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", res.status(400).json({
              msg: ' Por favor llena todos los campos'
            }));
          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();
          case 6:
            _pool2 = _context2.sent;
            _context2.next = 9;
            return _pool2.request().input("ID", _database.sql.VarChar.id).input("fecha_ingreso", _database.sql.VarChar, fecha_ingreso).input("numero_serie", _database.sql.VarChar, numero_serie).input("placa_vehiculo", _database.sql.VarChar, placa_vehiculo).input("foto_placa", _database.sql.VarChar, foto_placa).input("foto_contenedor", _database.sql.VarChar, foto_contenedor).input("foto_sello", _database.sql.VarChar, foto_sello).input("nombre_audit", _database.sql.VarChar, nombre_audit).query(_database.queries.addNewVehicle);
          case 9:
            res.json({
              fecha_ingreso: fecha_ingreso,
              numero_serie: numero_serie,
              placa_vehiculo: placa_vehiculo,
              foto_placa: foto_placa,
              foto_contenedor: foto_contenedor,
              foto_sello: foto_sello,
              nombre_audit: nombre_audit
            });
            _context2.next = 16;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);
          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return function createNewVehicles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//obtener un unico vehiculo por ID
exports.createNewVehicles = createNewVehicles;
var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("ID", id).query(_database.queries.getProductById);
          case 6:
            result = _context3.sent;
            res.send(result.recordset[0]);
          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//DELETE 
exports.getProductById = getProductById;
var deleteProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.getConnection)();
          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("ID", id).query(_database.queries.deleteProductById);
          case 6:
            result = _context4.sent;
            res.json('Se eliminó el registro con id: ' + id);
          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function deleteProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//consulta total de registros
exports.deleteProductById = deleteProductById;
var getTotalVehicles = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.getConnection)();
          case 2:
            pool = _context5.sent;
            _context5.next = 5;
            return pool.request().query(_database.queries.getTotalVehicles);
          case 5:
            result = _context5.sent;
            res.json(result.recordset[0]['']);
          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getTotalVehicles(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//UPDATE
exports.getTotalVehicles = getTotalVehicles;
var updateVehicleById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, fecha_ingreso, numero_serie, placa_vehiculo, foto_placa, foto_contenedor, foto_sello, nombre_audit, id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            //recibir todos los datos del cliente
            _req$body2 = req.body, fecha_ingreso = _req$body2.fecha_ingreso, numero_serie = _req$body2.numero_serie, placa_vehiculo = _req$body2.placa_vehiculo, foto_placa = _req$body2.foto_placa, foto_contenedor = _req$body2.foto_contenedor, foto_sello = _req$body2.foto_sello, nombre_audit = _req$body2.nombre_audit;
            id = req.params.id;
            if (!(fecha_ingreso == null || numero_serie == null || placa_vehiculo == null || foto_placa == null || foto_contenedor == null || foto_sello == null || nombre_audit == null)) {
              _context6.next = 4;
              break;
            }
            return _context6.abrupt("return", res.status(400).json({
              msg: ' Por favor llena todos los campos'
            }));
          case 4:
            _context6.next = 6;
            return (0, _database.getConnection)();
          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input('fecha_ingreso', _database.sql.DateTime, fecha_ingreso).input('numero_serie', _database.sql.Numeric, numero_serie).input('placa_vehiculo', _database.sql.VarChar, placa_vehiculo).input('foto_placa', _database.sql.VarChar, foto_placa).input('foto_contenedor', _database.sql.VarChar, foto_contenedor).input('foto_sello', _database.sql.VarChar, foto_sello).input('nombre_audit', _database.sql.VarChar, nombre_audit).input('ID', _database.sql.Int, id).query(_database.queries.updateVehicleById);
          case 9:
            res.json({
              fecha_ingreso: fecha_ingreso,
              numero_serie: numero_serie,
              placa_vehiculo: placa_vehiculo,
              foto_placa: foto_placa,
              foto_contenedor: foto_contenedor,
              foto_sello: foto_sello,
              nombre_audit: nombre_audit
            });
          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function updateVehicleById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateVehicleById = updateVehicleById;