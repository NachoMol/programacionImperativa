function generarMatriz10por10() {

    let matriz = [];
    let incrementador = 1;
    for (let filas = 0; filas < 10; filas++) {
        matriz.push([]);
        for (let columnas = 0; columnas < 10; columnas++) {
            matriz[filas].push(incrementador++);
        }
    }

    return matriz;
}

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);