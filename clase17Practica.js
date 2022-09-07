
// Ejercicio 1

// /**
//  * Declara una variable que contenga una matriz
//  * de 5x5 llena de puros numeros enteros y positivos
//  */

//  let miMatriz = [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1]
//   ];
  
//   /**
//    * Luego, escribe un algoritmo para sumar todos
//    * los numeros en la matriz.
//    */
  
//   let sumarValores = (miMatriz) => {
//     let resultado = 0;
  
//     for (let i = 0; i < miMatriz.length; i++) {
//       for (let j = 0; j < miMatriz[i].length; j++) {
//         resultado += miMatriz[i][j];
//       }
//     }
//     return resultado;
//   };
  
//   console.log(sumarValores(miMatriz));
  

//----------------------------------------------------------------------------------------

let crearMatriz = () => {
    let numero = 1;
    let resultado = [];
        for(let i = 0 ; resultado.length < 10; i++){
            for (let j = 0; resultado[i].length < 10; j++){
                resultado[i].push (numero);
                console.log('agregamos un valor' + numero);
                numero++;
            }
        }
        return resultado;
}

let matriz = crearMatriz();

console.log(matriz);