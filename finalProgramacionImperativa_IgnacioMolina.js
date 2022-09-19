// Ejercicio 1: 
//Crear un arreglo de objetos donde cada objeto representa un tweet. Cada tweet debe tener las siguientes propiedades:
// - Id (number)
// - Texto (string)
// - Cantidad de likes (number)
// - Cantidad de retweets  (number)
// - Es privado (bool)
// - Tu arreglo debe tener, al menos, 6 tweets.
// Declarar una función que reciba el array por parámetro y un id. Debe retornar un booleano indicando si ese tweet es privado o no.

let arrayTweets = [
    {
        id: 1,
        texto: 'Hola mundo',
        cantidadLikes: 100,
        cantidadRetweets: 20,
        esPrivado: true
    },
    {
        id: 2,
        texto: 'Chau mundo',
        cantidadLikes: 150,
        cantidadRetweets: 2,
        esPrivado: true
    },
    {
        id: 3,
        texto: 'Mi nombre es Nacho',
        cantidadLikes: 200,
        cantidadRetweets: 35,
        esPrivado: false
    },
    {
        id: 4,
        texto: 'Aguante Boca',
        cantidadLikes: 10000,
        cantidadRetweets: 500,
        esPrivado: true
    },
    {
        id: 5,
        texto: 'Si!',
        cantidadLikes: 500,
        cantidadRetweets: 250,
        esPrivado: false
    },
    {
        id: 6,
        texto: 'asd',
        cantidadLikes: 1,
        cantidadRetweets: 0,
        esPrivado: true
    }
]

let tweetPrivado = (arr,id) => {
    for (let i = 0; i < arr.length ; i++ ){
        if (arr[i].id === id){
            return arr[i].esPrivado;
        }
    }
}

//Validaciones

console.log(tweetPrivado(arrayTweets,3));
console.log(tweetPrivado(arrayTweets,6));
console.log(tweetPrivado(arrayTweets,7));

//-----------------------------------------------------------------

// Ejercicio 2:
// Dado el siguiente array:

const autos = [{
    marca: 'Toyota',
    anio: 2014,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2015,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2017,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]

// Crear una función que reciba por parámetro el arreglo y lo ordene descendentemente según su año.

let ordenarPorAnio = (arr) => {
    let aux;
    for (let i = 0; i < arr.length ; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j].anio < arr[j+1].anio){
                aux = arr[j].anio
                arr[j].anio = arr[j+1].anio
                arr[j+1].anio = aux
            }
        }
    }
    return arr;
}

//Validación

console.log(ordenarPorAnio(autos));

//-----------------------------------------------------------------

// Ejercicio 3:
// Dada la siguiente matriz:

let matriz = [
    [3, 21, 3, 1],
    [39, 4, 5, 12],
    [66, 2, 87, 6],
    [66, 72, 87, 16],
    [5, 67, 112, 79]
];

// 1. Crear una función que reciba a la matriz por parámetro y devuelva la multiplicación de la segunda fila. (Recordá que las posiciones inician en 0)

let multiplicarSegundaFila = x => {
    let resultado = 1;
    for (let i = 0; i < x[1].length; i++){
        resultado *= x[1][i]
    }
    return resultado;
}

//Validación

console.log(multiplicarSegundaFila(matriz));

// 2. Crear una función que reciba a la matriz por parámetro y devuelva un nuevo array con todos los valores de la matriz que sean pares y mayores a 6.

let retornarValores = x => {
    let arrayResultado = []
    for(let i = 0; i < x.length ; i++){
        for (let j = 0; j < x[i].length ; j++){
            if (x[i][j] % 2 === 0 && x[i][j] > 6){
                arrayResultado.push(x[i][j])
            }
        }
    }

    return arrayResultado
}

//Validación

console.log(retornarValores(matriz));