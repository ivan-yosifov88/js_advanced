function checkAllDigitsAreSame(number){
    let numberAsString = String(number);
    let isAllElementsAreSame = true;
    let sumOfAllElements = 0

    for (const element of numberAsString){
        if (numberAsString[0] !== element){
            isAllElementsAreSame = false
        }
        sumOfAllElements += Number(element)
    }
    console.log(isAllElementsAreSame)
    console.log(sumOfAllElements)
}
checkAllDigitsAreSame(2222222)
