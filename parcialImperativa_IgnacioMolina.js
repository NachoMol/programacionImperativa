// Ejercicio 1
let restarPares = (numero1,numero2) =>{
    if (numero1 % 2 == 0 && numero2 % 2 == 0){
        return numero1 - numero2
    }
    else{
        return 'Lo siento,  uno de los parámetros no es par'
    }
}

//Validaciones

console.log(restarPares(10,2));

console.log(restarPares(1,3));

console.log(restarPares('a',5));

//------------------------------------------------------------------------------

//Ejercicio 2

let puedeEntrar = (edad, tieneEntrada) =>{
    if (edad >= 18 && tieneEntrada == true){
        return true
    }
    else if (edad < 18 && tieneEntrada == true){
        return 'Sólo puedes acceder con un adulto acompañante'
    }
    else{
        return false
    }
}

//Validaciones

console.log(puedeEntrar(18,true));
console.log(puedeEntrar(17,true));
console.log(puedeEntrar(18,false));
console.log(puedeEntrar(17,false));

//------------------------------------------------------------------------------

//Ejercicio 3

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },   
]

let filtro = arr =>{
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i].tipo == 'tecnologia' && arr[i].precio >= 50000){
            nuevoArr.push(arr[i])
        }
    }
    return nuevoArr;
}

console.log(filtro(productos));

