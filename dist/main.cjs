"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Instancia de la clase Impuestos
var impuesto2 = new _impuestos["default"](100000); // Instancia de la clase Cliente

var cliente1 = new _cliente["default"]("Pedro");
var cliente2 = new _cliente["default"]("Carlos", impuesto2);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());