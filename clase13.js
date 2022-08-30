
// --------------------------------------------------------

// let loopDePares = numero => {
// for (let i = 0 ; i <= 100 ; i++){
// if ( (i+numero) % 2 == 0){
// console.log(`el numero ${i} + ${numero} es par` );
// }
// else{
// console.log(i);
// }
// }
// }

// loopDePares(10);

// --------------------------------------------------------

// let loopDeImpares = (numero, palabra) => {
// for (let i = 0 ; i <= 100 ; i++){
// console.log(i);
// if ( (i+numero) % 2 != 0){
// console.log(palabra);
// }
// }
// }

// loopDeImpares(16,'hola')

// --------------------------------------------------------

// let sumatoria = numero => {
//     let resultado = 0;
//     for(let i = 1 ; i <= numero ; i++){
//         resultado = resultado + i;
//     }
//     return resultado;
// }

// console.log(sumatoria(2));

// --------------------------------------------------------

// let nuevoArreglo = numero =>{
//     let array = [];
//     for (let i = 1; i <= numero ; i++){
//         array.push (i);
//     }
//     return array;
// }

// console.log(nuevoArreglo(10));

// --------------------------------------------------------

// let split = palabra => {
//     let arrayPalabra = [];
//     for (let i = 0 ; i < palabra.length ; i++){
//          arrayPalabra.push (palabra[i]);
//     }
//     return arrayPalabra;
// }

// console.log(split('hola'));

// --------------------------------------------------------

// let arrayHandler = (array1,array2) => {
//     for(let i = 0 ; i <array1.length ; i++){
//         console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
//     }
// }

// arrayHandler([1,2,3],[4,5,6]);

// --------------------------------------------------------

let palindromo = palabra => {
    let resultado;
    for (let i = 0 ; i < palabra.length ; i++){
        if (palabra[i] == palabra[i-(palabra.length - 1)]){
            resultado = true;
        }else{
            resultado = false;
        }
    }
    return resultado;
}

console.log(palindromo('hola'));