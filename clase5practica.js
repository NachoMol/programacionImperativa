
const prompt = require("prompt-sync")({ sigint: true });

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

