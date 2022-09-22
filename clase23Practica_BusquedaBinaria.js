// Ejercicio 1
// Dada la siguiente colección:

let personas = [
    {
    id: 1,
    nombre: "Ale",
    edad: 15
    },
    {
    id: 2,
    nombre: "Javi",
    edad: 83
    },
    {
    id: 3,
    nombre: "Luis",
    edad: 26
    },
    {
    id: 4,
    nombre: "Dan",
    edad: 16
    },
    {
    id: 5,
    nombre: "Tito",
    edad: 22
    },
    {
    id: 6,
    nombre: "Marina",
    edad: 76
    },
    {
    id: 7,
    nombre: "Susy",
    edad: 35
    },
    {
    id: 8,
    nombre: "John",
    edad: 25
    },
    ]

//     Realizar lo siguiente:
//     a. Ordenar la colección de menor a mayor utilizando bubble sort.

const ordenarMenorAMayor = (arr,parametro) => {
let aux;
for (let i = 0; i < arr.length ; i++){
for (let j = 0; j < arr.length - 1; j++){
if (arr[j][parametro] > arr[j+1][parametro]){
aux = arr[j]
arr[j] = arr[j+1]
arr[j+1] = aux
}
}
}
return arr;
}

ordenarMenorAMayor(personas,'edad')

//     b. Crear una función buscarNombre que recibe como parámetros la
//     colección de personas y una edad, y como resultado deberá imprimir
//     por consola el nombre correspondiente a la persona cuya edad fue
//     pasada como parámetro.
//     Para realizar la búsqueda en la colección de personas, utilizar el
//     algoritmo de búsqueda binaria.
    const buscarNombre = (arr,param) => {
        let min = 0;
        let max = arr.length - 1;
            while (min <= max){
                const mid = Math.floor ((min + max) / 2);

                const guess = arr[mid];

                if(guess.edad === param){
                    return mid;
                }

                if (guess.edad > param){
                    high = mid - 1
                }
                else{
                    low = mid + 1;
                }
                console.log('busqueda');
            }
            return null;
    }
//     Por ejemplo:
console.log(personas[buscarNombre(personas,25)].nombre) // Imprime John
// buscarNombre(personas,76) // Imprime Marina
// buscarNombre(personas,16) // Imprime Dan
// buscarNombre(personas,15) // Imprime Ale