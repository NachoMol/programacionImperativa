//-------------------------------------------------------------

// const edades = [33, 27, 34, 30, 34, 25];

// let ordenarNombres = (arr) => {
//     let aux;
//     for (let i = 0; i < arr.length ; i++){
//         for (let j = 0; j < arr.length -1 ; j++){
//             if (arr[j] > arr[j + 1]){
//                 aux = arr[j];
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = aux;
//             }
//         }
//     }
// }

// ordenarNombres(edades);
// console.log(edades);

//-------------------------------------------------------------

// const edades = [33, 27, 34, 30, 34, 25];

// let ordenarNombres = (arr) => {
//     let aux;
//     for (let i = 0; i < arr.length ; i++){
//         for (let j = 0; j < arr.length -1 ; j++){
//             if (arr[j] < arr[j + 1]){
//                 aux = arr[j];
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = aux;
//             }
//         }
//     }
// }

// ordenarNombres(edades);
// console.log(edades);

//-------------------------------------------------------------


// const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L']

// let ordenarNombres = (arr) => {
//     let aux;
//     for (let i = 0; i < arr.length ; i++){
//         for (let j = 0; j < arr.length -1 ; j++){
//             if (arr[j] > arr[j + 1]){
//                 aux = arr[j];
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = aux;
//             }
//         }
//     }
// }

// ordenarNombres(letras);
// console.log(letras);

//-------------------------------------------------------------

// const arrayCuentas =
// [
// {
// titular: "Arlene Barr",
// estaHabilitada: false,
// saldo: 3253.40,
// edadTitular: 33,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Roslyn Torres",
// estaHabilitada: false,
// saldo: 3229.45,
// edadTitular: 27,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Cleo Lopez",
// estaHabilitada: true,
// saldo: 1360.19,
// edadTitular: 34,
// tipoCuenta: "corriente"
// },
// {
// titular: "Daniel Malone",
// estaHabilitada: false,
// saldo: 3627.12,
// edadTitular: 30,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Ethel Leon",
// estaHabilitada: true,
// saldo: 1616.52,
// edadTitular: 34,
// tipoCuenta: "sueldo"
// },
// {
// titular: "Harding Mitchell",
// estaHabilitada: true,
// saldo: 1408.68,
// edadTitular: 25,
// tipoCuenta: "corriente"
// }
// ]

// let ordenarSaldos = (arr) => {
//     let aux;
//     for (let i = 0; i < arr.length ; i++){
//         for (let j = 0; j < arr.length -1 ; j++){
//             if (arr[j].saldo > arr[j + 1].saldo){
//                 aux = arr[j];
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = aux;
//             }
//         }
//     }
// }

// ordenarSaldos(arrayCuentas);
// console.log(arrayCuentas);

//-------------------------------------------------------------

const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
]

let ordenarSaldos = (arr) => {
    let aux;
    for (let i = 0; i < arr.length ; i++){
        for (let j = 0; j < arr.length -1 ; j++){
            if (arr[j].edadTitular > arr[j + 1].edadTitular){
                aux = arr[j];
                arr[j] = arr[j + 1]
                arr[j+1] = aux;
            }
        }
    }
}

ordenarSaldos(arrayCuentas);
console.log(arrayCuentas);
