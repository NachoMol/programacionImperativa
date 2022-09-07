/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

 let miMatriz = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];
  
  /**
   * Luego, escribe un algoritmo para sumar todos
   * los numeros en la matriz.
   */
  
  let sumarValores = (miMatriz) => {
    let resultado = 0;
  
    for (let i = 0; i < miMatriz.length; i++) {
      for (let j = 0; j < miMatriz[i].length; j++) {
        resultado += miMatriz[i][j];
      }
    }
    return resultado;
  };
  
  console.log(sumarValores(miMatriz));
  