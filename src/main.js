import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

// Instancia de la clase Impuestos
let impuesto2 = new Impuestos(100000)

// Instancia de la clase Cliente
let cliente1 = new Cliente("Pedro") 
let cliente2 = new Cliente("Carlos", impuesto2) 

console.log(cliente1.calcularImpuesto())
console.log(cliente2.calcularImpuesto())



