function diagonalAttack(arrayOfStrings){
    function parseArray(arrayOfStrings){
        let arrayOfNumbers = []
        for (let row of arrayOfStrings){
            let currentRow = []
            currentRow = row.split(' ').map(Number)
            arrayOfNumbers.push(currentRow)
        }
        return arrayOfNumbers
    }
    function isDiagonalsEqual(arrayOfNumbers){
        let leftDiagonal = getLeftDiagonalSum(arrayOfNumbers)
        let rightDiagonal = getRightDiagonalSum(arrayOfNumbers)
        return leftDiagonal === rightDiagonal

    }
    function getRightDiagonalSum(arrayOfNumbers){
        let boardSize = arrayOfStrings.length
        let rightDiagonal = 0
        for (let i = 0; i< boardSize; i ++){
            rightDiagonal += arrayOfNumbers[i][i]
        }
        return rightDiagonal
    }
    function getLeftDiagonalSum(arrayOfNumbers){
        let boardSize = arrayOfStrings.length
        let leftDiagonal = 0
        for (let i = 0; i < boardSize; i++){
            leftDiagonal += arrayOfNumbers[i][boardSize - 1 - i] 
        }
        return leftDiagonal
    }
    function getDiagonalsCoordinate(arrayOfNumbers){
        let coordinates = []
        let boardSize = arrayOfNumbers.length;
        for (let i = 0; i< boardSize; i ++){
            coordinates.push(`${i}${i}`)
        }
        for (let i = 0; i < boardSize; i++){
            coordinates.push(`${i}${boardSize - 1 - i}`)
        }
        return coordinates
    }
    function mutateMatrix(arrayOfNumbers){
        let diagonalCoordinates = getDiagonalsCoordinate(arrayOfStrings)
        let sumOfDiagonals = getLeftDiagonalSum(arrayOfNumbers)
        for (let row = 0; row < arrayOfStrings.length; row ++){
            for (let col = 0; col < arrayOfStrings.length; col ++){
                let indices = `${row}${col}`
                if (!diagonalCoordinates.includes(indices)){
                    arrayOfNumbers[row][col] = sumOfDiagonals
                }
            }
        }
        return arrayOfNumbers
    }
    function printArray(arrayOfNumbers){
        arrayOfNumbers.forEach(element => console.log(element.join(' ')))
    }

    let arrayOfNumbers = parseArray(arrayOfStrings)
    if (isDiagonalsEqual(arrayOfNumbers)){
        mutateMatrix(arrayOfNumbers)
    }
    printArray(arrayOfNumbers)
    
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])