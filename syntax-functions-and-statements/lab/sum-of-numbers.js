function sumOfAllNumbersInRange(firstNumber, secondNumber){
    let sumOfAllNumbers = 0
    let startNumber = Number(firstNumber);
    let endNumber = Number(secondNumber);
    for (let current_number = startNumber; current_number <= endNumber; current_number++){
        sumOfAllNumbers += current_number
    }
    return sumOfAllNumbers
}

console.log(sumOfAllNumbersInRange('1', '5' ))
console.log(sumOfAllNumbersInRange('-8', '20'))