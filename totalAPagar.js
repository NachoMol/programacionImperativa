const prompt = require("prompt-sync")({ sigint: true });

// totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

let totalAPagar = (vehiculo, litrosConsumidos) => {
    let valorExtra;
    let precioLitro;
    switch (vehiculo){
        case 'coche':
            precioLitro = 86;

        break;

        case 'moto':
        precioLitro = 70;

        break;

        case 'autobús':

        precioLitro = 55;
        break;
    }

    if(0 <= litrosConsumidos <= 25){
        valorExtra = 50;
    }
    else{
        valorExtra = 25;
    }

    return precioLitro * litrosConsumidos + valorExtra;

}

let vehiculo = prompt('ingrese su tipo de vehiculo');
let litrosConsumidos = prompt('ingrese los litros consumidos');
console.log(totalAPagar(vehiculo,litrosConsumidos));