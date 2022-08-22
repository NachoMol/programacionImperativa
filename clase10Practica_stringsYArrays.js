
//-------------------------------------------------------------------------------------------

// Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.

let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

//-------------------------------------------------------------------------------------------

// Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.


let peliculasEnMayuscula = array =>{

    for(let i = 0; i < array.length ; i++){
        
        array[i] = array[i].toUpperCase();
        
    }
    return array;

}

// console.log(peliculasEnMayuscula(peliculas));

//-------------------------------------------------------------------------------------------

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

// let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// let nuevoCatalogo = (arr1,arr2) => {

//     for(let i = 0; i < arr2.length ; i++){
//         arr1.push(arr2[i]);
//     }

// peliculasEnMayuscula(arr1);

// return arr1;

// }

// console.log(nuevoCatalogo(peliculas,peliculasAnimadas));

//-------------------------------------------------------------------------------------------

// Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// pd: por precaución, guardá el elemento que vas a eliminar en una variable.

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

let nuevoCatalogo = (arr1,arr2) => {

    let elementoEliminado = arr2.pop();

    for(let i = 0; i < arr2.length ; i++){
        arr1.push(arr2[i]);
    }

peliculasEnMayuscula(arr1);

return arr1;

}

console.log(nuevoCatalogo(peliculas,peliculasAnimadas));

//-------------------------------------------------------------------------------------------


