function solveEquation(firstNumber, secondNumber, mathematicalOperator){
    let equationResult;
    switch (mathematicalOperator){
        case '+':
            equationResult = firstNumber + secondNumber;
            break;
        case '-':
            equationResult = firstNumber - secondNumber;
            break;
        case '*':
            equationResult = firstNumber * secondNumber;
            break;
        case '/':
            equationResult = firstNumber / secondNumber;
            break;
        case '%':
            equationResult = firstNumber % secondNumber;
            break;
        case '**':
            equationResult = firstNumber ** secondNumber;
            break;
    }
    
    console.log(equationResult)
}
solveEquation(5, 6, '+')
solveEquation(3, 5.5, '*')