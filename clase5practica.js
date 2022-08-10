const prompt = require("prompt-sync")({ sigint: true });

//Micro desafío 1 --> function test1(x,y){return y - x} --> va a devolver y - x;

//Micro desafío 2 --> function test2(x,y){return x * 2 , console.log(x) , return x / 2} --> va a retornar únicamente el resultado de x * 2 pero no va a imprimir nada en pantalla

// Crear una función que convierta pulgadas en centímetros.
let pulgadas = prompt('ingrese las pulgadas: ');
let pulgadasACentimetros = pulgadas => console.log(pulgadas * 2.54);

pulgadasACentimetros(pulgadas);

//Crear una función que recibe un string y lo convierte en una URL.
let stringUrl = prompt('ingrese el string: ');
let convertorUrl = stringUrl => console.log(`https://www.${stringUrl}.com`);

convertorUrl(stringUrl);

//Crear una función que recibe un string y devuelve la misma frase pero con admiración.
let stringAdmiracion = prompt('ingrese el string:');
let convertorAdmiracion = stringAdmiracion => console.log(`¡${stringAdmiracion}!`);

convertorAdmiracion(stringAdmiracion);

//Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
let edad = prompt('ingrese la edad de su perro: ');
let edadPerro = edad => console.log(edad * 7);

edadPerro(edad);

// Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
let sueldo = prompt('ingrese su sueldo: ');
let horaTrabajo = sueldo => console.log(sueldo / 40);

horaTrabajo(sueldo);

// Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona.
let peso = prompt('ingrese su peso (en kg): ')
let altura = prompt('ingrese su altura (en mts): ')
let calculadorIMC= (peso,altura) => console.log(peso/(altura^2));

calculadorIMC(peso,altura);

// Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.
