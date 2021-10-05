function sortArray(arrayOfNumbers, typeOfSort){
    let compareFunction 
    if (typeOfSort == 'asc'){
        compareFunction = (a, b) => a - b
    }else if (typeOfSort == 'desc'){
        compareFunction = (a, b) => b - a
    }
    return arrayOfNumbers.sort(compareFunction)
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'))