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





//Micro desafío 1 --> function test1(x,y){return y - x} --> va a devolver y - x;

function test1(x,y){
    console.log(y - x);
}

test1(5,4);

//
