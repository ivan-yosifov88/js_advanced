function janNotation(arrayOfInstructions){
    function addOperation(a, b){
        return a + b;
    }
    function multiplyOperation(a, b){
        return a * b
    }
    function divideOperation(a, b){
        if (b !== 0){
            return a / b
        }
    }
    function subtractOperation(a , b){
        return a - b
    }

    const operatorMapper = {
        '+': addOperation,
        '-' : subtractOperation,
        '*' : multiplyOperation, 
        '/' : divideOperation
    }
    

    let numbers = []

    let operands = []
    const validOperators = ['+', '-', '*', '/']
    for (element of arrayOfInstructions){
        if (validOperators.includes(element)){
            operands.push(element);
            if (numbers.length >= 2){
                let resultOfCalculation 
                let currentOperand = operands.shift()
                let previousNumber = numbers.pop()
                let currentNumber = numbers.pop()
                if (previousNumber == undefined || currentNumber == undefined){
                    console.log("Error: too many operands!")
                    return
                }else if (currentOperand == undefined){
                    console.log("Error: not enough operands!")
                    return
                }else{
                    resultOfCalculation = operatorMapper[currentOperand](currentNumber, previousNumber);
                    numbers.push(resultOfCalculation)
                }
            }
        }else if (!isNaN(element)){
            numbers.push(element)
        }
    }
    
    if (numbers.length <= operands.length){
        console.log("Error: not enough operands!")
        return
    }else if (numbers.length != operands.length + 1){
        console.log("Error: too many operands!")
        return
    }else{
        console.log(numbers[0])
        return
    }

}

janNotation([15,
    '/'])

janNotation([3,
    4,
    '+'])

janNotation([5,
    3,
    4,
    '*',
    '-'])

janNotation([7,
    33,
    8,
    '-'])
janNotation([31,
    2,
    '+',
    11,
    '/'])
janNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'])