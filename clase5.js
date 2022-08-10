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

saludar2(nombre);