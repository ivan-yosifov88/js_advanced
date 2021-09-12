function calculateEqualNeighbors(matrix){
    let totalEqualNeighbors = 0
    let currentElement
    for (let col = 0; col < matrix[0].length; col ++){
        for (let row = 0; row < matrix.length; row ++){
            if (row > 0 && matrix[row][col] === matrix[row - 1][col]){
                totalEqualNeighbors ++
            }
            if (col > 0 && matrix[row][col] === matrix[row][col - 1] ){
                totalEqualNeighbors ++
            }
        }
    }
    return totalEqualNeighbors
}

console.log(calculateEqualNeighbors(
    [['2', '3', '4', '7', '0'],
     ['4', '0', '5', '3', '4'],
     ['2', '3', '5', '4', '2'],
     ['9', '8', '7', '5', '4']]))

console.log(calculateEqualNeighbors(
    [['test', 'yes', 'yo', 'ho'],
     ['well', 'done', 'yo', '6'],
     ['not', 'done', 'yet', '5']]
))
console.log(calculateEqualNeighbors(
    [['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]))
