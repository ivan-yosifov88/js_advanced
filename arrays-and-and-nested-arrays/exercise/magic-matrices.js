function isMagicMatrix(nestedArray){
    let sumsOfAll = []
    for (let col = 0; col < nestedArray[0].length; col ++){
        let currentSum = 0
        for (let row = 0; row < nestedArray.length; row ++){
            currentSum += nestedArray[row][col]
        }
        sumsOfAll.push(currentSum)
    }
    for (let row = 0; row < nestedArray.length; row ++){
        let currentSum = 0
        for (let col = 0; col < nestedArray[0].length; col ++){
            currentSum += nestedArray[row][col]
        }
        sumsOfAll.push(currentSum)
    }
    return sumsOfAll.every(element => element === sumsOfAll[0])
}

console.log(isMagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))
console.log(isMagicMatrix(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    ))
console.log(isMagicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))