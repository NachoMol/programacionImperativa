const prompt = require("prompt-sync")({ sigint: true });

let sumar = (numero1,numero2) => numero1 + numero2;

let restar = (numero1,numero2) => numero1 - numero2;

let multiplicar = (numero1,numero2) => numero1 * numero2;

let dividir = (numero1,numero2) => numero1 / numero2;

let cuadradoDeUnNumero = numero1 => multiplicar(numero1,numero1);

let promedioDeTresNumeros = (numero1,numero2,numero3) => dividir(numero1 + numero2 + numero3, 3);

let calcularPorcentaje = (total, porcentaje) => dividir(multiplicar(porcentaje,total),100);

let generadorDePorcentaje = (numero1,numero2) => dividir(multiplicar(numero1,100),numero2);

console.log('--- Testeo de funciones ---')

let numero1 = Number(prompt(`ingrese el primer valor: `));
let numero2 = Number(prompt(`ingrese el segundo valor: `));
let numero3 = Number(prompt(`ingrese el tercer valor: `));
let total = Number(prompt(`ingrese el total: `))
let porcentaje = Number(prompt(`ingrese el porcentaje: `))

console.log(sumar(numero1,numero2));
console.log(restar(numero1,numero2));
console.log(multiplicar(numero1,numero2));
console.log(dividir(numero1,numero2));

console.log(cuadradoDeUnNumero(numero1));

console.log(promedioDeTresNumeros(numero1,numero2,numero3));

console.log(calcularPorcentaje(total,porcentaje));

console.log(generadorDePorcentaje(numero1,numero2));


