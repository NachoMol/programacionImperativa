const prompt = require("prompt-sync")({ sigint: true });

let sumar = (numero1,numero2) => console.log(numero1 + numero2);

let restar = (numero1,numero2) => console.log(numero1 - numero2);

let multiplicar = (numero1,numero2) => console.log(numero1 * numero2);

let dividir = (numero1,numero2) => console.log(numero1 / numero2);

console.log('--- Testeo de funciones ---')

let numero1 = prompt(`ingrese el primer valor: `);
let numero2 = prompt(`ingrese el segundo valor: `);

sumar(numero1,numero2);
restar(numero1,numero2);
multiplicar(numero1,numero2);
dividir(numero1,numero2);

