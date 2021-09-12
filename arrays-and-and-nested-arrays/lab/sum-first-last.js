function getSumOfTheFirstAndLast(listOfStrings){
    let sumOfElements
    if (2 <= listOfStrings.length){
        let firstNumber = Number(listOfStrings[0])
        let lastNumber = Number(listOfStrings[listOfStrings.length - 1])
        sumOfElements = firstNumber + lastNumber
    }
    return sumOfElements
}
console.log(getSumOfTheFirstAndLast(['20', '30', '40']))
