//-----------------------------------------------------------------------------------------
// a partir de el siguiente array de edades nos solicitan realizar lo siguiente:
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// a. Obtener en un nuevo array las edades menores a 18.

// let obtenerMenores = arr => {
//     let arrayMenores = [];
//     for(let i = 0; i < arr.length ; i++){
//         if (arr[i] < 18){
//             arrayMenores.push(arr[i]);
//         }
//     }
//     return arrayMenores;
// }

// console.log(obtenerMenores(edades));

// b. Obtener en un nuevo array las edades mayor o igual a 18.

// let obtenerMayores = arr => {
// let arrayMayores = [];
// for(let i = 0; i < arr.length ; i++){
// if (arr[i] >= 18){
// arrayMayores.push(arr[i]);
// }
// }
// return arrayMayores;
// }
// console.log(obtenerMayores(edades));

// c. Obtener en un nuevo array las edades igual a 18.

// let obtenerIguales = arr => {
//     let arrayIguales = [];
//     for(let i = 0; i < arr.length ; i++){
//     if (arr[i] == 18){
//     arrayIguales.push(arr[i]);
//     }
//     }
//     return arrayIguales;
//     }
//     console.log(obtenerIguales(edades));

    // d. Obtener el menor.

    // let obtenerMenor = arr => {
    //     let elMenor = arr[0];
    //     for(let i = 1; i < arr.length ; i++){
    //         if (arr[i] < elMenor){
    //             elMenor = arr[i];
    //         }
    //     }
    //     return elMenor;
    // }

    // console.log(obtenerMenor(edades));

    // e. Obtener el mayor.

    // let obtenerMayor = arr => {
    //     let elMayor = arr[0];
    //     for(let i = 1; i < arr.length ; i++){
    //         if (arr[i] > elMayor){
    //             elMayor = arr[i];
    //         }
    //     }
    //     return elMayor;
    // }

    // console.log(obtenerMayor(edades));

// f. Obtener el promedio de edades.

// let promedio = arr => {
//     let sumatoria = 0;
//     let resultadoPromedio;
//     for (let i = 0; i < arr.length; i++){
//         sumatoria = sumatoria + arr[i];
//     }
//     resultadoPromedio = sumatoria / arr.length;
//     return resultadoPromedio;
// }

// console.log(promedio(edades));

// g. Incrementar en 1 todas las edades

let incrementarEn1 = arr => {
    for (let i = 0; i < arr.length; i++){
        arr[i]++;
    }
    return arr;
}

console.log(incrementarEn1(edades));