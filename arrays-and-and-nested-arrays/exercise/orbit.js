// this is not my solution but I understand it !!!!!!!

function orbit(arrayOfNumbers){
    function generateEmptyMatrix(rowsCount){
        let matrix = [];
        for(let r = 0; r < rowsCount; r++) {
            matrix.push([]);
        }
        return matrix
    }
    let [rowsCount, columnCount, starRowIndex, starColIndex] = arrayOfNumbers
    let matrix = generateEmptyMatrix(rowsCount)
    
    for (let row = 0; row < columnCount; row ++){
        for (let col = 0; col < rowsCount; col++){
            matrix[row][col] = Math.max(Math.abs(row - starRowIndex), Math.abs(col - starColIndex)) + 1
        }
    }
    return matrix.forEach(row => console.log(row.join(' ')))
}
orbit([4, 4, 0, 0])