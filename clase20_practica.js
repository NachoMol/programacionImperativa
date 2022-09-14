// let likes = [17,19,406,359,102,569,109,80,60,97,99,143,24,45,68]
// function ordenarValores(arr) {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length -1; j++){
//             if (arr[j] < arr[j + 1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1] 
//                 arr[j + 1] = temp 
//             }
//         }   
//     }
//     return arr 
// }
// ordenarValores(likes)
// console.log(likes)

let temperatura = [{dia:20,mes:5,temperaturaMaxima:28,temperaturaMinima:15},
    {dia:7,mes:3,temperaturaMaxima:14,temperaturaMinima:8},
    {dia:15,mes:6,temperaturaMaxima:18,temperaturaMinima:4}]
    function clima(arr)
    {
        for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length -1; j++){
            if (arr[j].temperaturaMaxima < arr[j + 1].temperaturaMaxima){
                     let temp = arr[j]
                      arr[j] = arr[j + 1] 
                         arr[j + 1] = temp 
                     }
                 }   
             }
             return arr
    }
    console.log(clima(temperatura))

    let temperatura = [{dia:20,mes:5,temperaturaMaxima:28,temperaturaMinima:15},
        {dia:7,mes:3,temperaturaMaxima:14,temperaturaMinima:8},
        {dia:15,mes:6,temperaturaMaxima:18,temperaturaMinima:4}]
        function clima(arr)
        {
            for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length -1; j++){
                if (arr[j].temperaturaMinima > arr[j + 1].temperaturaMinima){
                         let temp = arr[j]
                          arr[j] = arr[j + 1] 
                             arr[j + 1] = temp 
                         }
                     }   
                 }
                 return arr
        }
        console.log(clima(temperatura))