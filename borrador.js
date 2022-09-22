const binarySearch = (arr, anio) => {

    let low = 0

    let high = arr.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)

        const guess = arr[mid]

        if(guess.edad === anio){
            return mid
        }

        if(guess.edad > anio){
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

filtrarPeople(personas)

console.log( personas[binarySearch(personas, 83)].nombre);