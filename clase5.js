const prompt = require("prompt-sync")({ sigint: true });

// Definir y crear una función es lo mismo, en este caso, definamos una que muestre en la consola un saludo. Luego, para poder ejecutarla, debemos invocarla o llamarla. Que sea algo así:

function saludar() {
console.log('hola, tanto tiempo sin verte.');
}

saludar();

// Modificar la función para que tome por parámetro un nombre y salude a esa persona cuando el lenguaje la ejecute.
function saludar2(nombre){
    console.log(`hola ${nombre}, tanto tiempo sin verte.`);
}

saludar2('ignacio');

// Modificar la función para que solicite al usuario ingresar su nombre con prompt.


let nombre = prompt('escribir nombre: ');
function saludar3(nombre){
console.log(`hola ${nombre}, tanto tiempo sin verte.`);
}

saludar3(nombre);


//Micro desafío 1 --> function test1(x,y){return y - x} --> va a devolver y - x;

function test1(x,y){
    console.log(y - x);
}

test1(5,4);

//Micro desafío 2 --> function test2(x,y){return x * 2 , console.log(x) , return x / 2} --> va a retornar únicamente el resultado de x * 2 pero no va a imprimir nada en pantalla

function test2(x,y){
    return x * 2;
    console.log(x);
    return x / 2;
}

test2(2,2);

