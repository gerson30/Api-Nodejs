"use strict";



var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
//importar app (recordar que index.js es desde donde se ejecuta la app)

_app["default"].listen(_app["default"].get('port'));
console.log('Server on port', _app["default"].get('port'));



