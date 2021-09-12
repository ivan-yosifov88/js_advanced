// this is not my solution but I think I understand it??????

function spiralMatrix(rowCount , colCount){
    function generateEmptyMatrix(rowCount){
        let matrix = [];
        for(let r = 0; r < rowCount; r++) {
            matrix.push([]);
        }
        return matrix
    }

    let matrix = generateEmptyMatrix(rowCount);
    let maxCount = rowCount * colCount;
    let startRow = 0;
    let startCol = 0;
    let count = 0;
    let minCol = 0;
    let minRow = 0;
    while (count < maxCount){
        for (let col = startCol; col < colCount && count < maxCount; col ++){
            matrix[minRow][col] = ++count
        }
        startRow ++
        minRow ++

        for (let row = startRow; row < rowCount && count < maxCount; row ++){
            matrix[row][colCount - 1] = ++count
        }
        colCount --
        for (let col = colCount - 1; col >= minCol; col --){
            matrix[rowCount - 1][col] = ++count
        }
        rowCount --
        for (let row = rowCount - 1; row >= minRow; row --){
            matrix[row][minCol] = ++count
        }
       minCol ++
       startCol ++
    }
    matrix.forEach(row => console.log(row.join(' ')))

}
spiralMatrix(10, 10)