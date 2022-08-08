const prompt = require("prompt-sync")({ sigint: true });


//La actividad cotidiana es comprar comida para Ulises

let hora = prompt('Que hora es?: ');
let piso = prompt('a que piso deseas ir?: ');
let precioComida = 3000;
let miPlata = prompt('cuanta plata tengo?: ');

miPlata = miPlata - precioComida;

console.log(`son las ${hora} , queres ir al piso ${piso} , y te van a quedar ${miPlata} pesos`);


//Desafio Extra: invertir variables


let cambioVariable;

cambioVariable = hora;
hora = piso;
piso = cambioVariable;

console.log(`ahora invertimos piso por hora, por lo que el piso es ${piso} y la hora es ${hora}`);