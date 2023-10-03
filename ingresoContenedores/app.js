"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _vehicles = _interopRequireDefault(require("./routes/vehicles.routes"));
//importar express

//inicializar express (ejecuta el modulo express)
var app = (0, _express["default"])();

//configurar el puerto
//settings (si existe la variable port utilicela si no utilice el puerto 3000   que se encuentra en el archivo index.js) 
app.set('port', _config["default"].port);

//recibir datos en json
//middlewares
app.use(_express["default"].json());
//recibir datos desde formularios HTML
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_vehicles["default"]);
var _default = app;
exports["default"] = _default;