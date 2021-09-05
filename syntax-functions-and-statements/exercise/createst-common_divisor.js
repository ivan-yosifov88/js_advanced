function getGCD(firstNumber, secondNumber){
    while (secondNumber > 0){
        swap = secondNumber
        secondNumber = firstNumber % secondNumber
        firstNumber = swap
    }
    return firstNumber
}

console.log(getGCD(24, 15))