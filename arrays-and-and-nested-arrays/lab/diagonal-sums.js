function findMatrixDiagonalSums(matrix){
    let primaryDiagonal = 0
    let secondaryDiagonal = 0
    for (let index = 0; index < matrix.length ; index ++){
        primaryDiagonal += Number(matrix[index][index])
        }
    for (let index = matrix.length - 1; index >= 0; index --){
        secondaryDiagonal += Number(matrix[index][matrix.length - 1 - index])
    }
    return `${primaryDiagonal} ${secondaryDiagonal}`
}
console.log(findMatrixDiagonalSums([[20, 40],
    [10, 60]]))
console.log(findMatrixDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]))