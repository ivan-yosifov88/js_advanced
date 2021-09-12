function getEmptyBoard(){
    let emptyBoard = []
    const boardSize = 3
    for (let row = 0; row < boardSize; row ++){
        let row = []
        for (let column = 0; column < boardSize; column ++){
            row.push(false)
        }
        emptyBoard.push(row)
    }
    return emptyBoard
}

let matrix = getEmptyBoard()

matrix.forEach(printRow)


function printRow(row){
//     let player = 'x'
//     let result =   `Player ${player} wins!`;
//     result += '\n' + row.join('\t')
    let result = row.join('\t')
    console.log(result)
//     row.forEach(printNumber);
}

// function printNumber(num){
//     console.log(num);
// };
let size = 4
let row = -1
let col = -1
let result = 0 <= row && row < size && 0 <= col && col < size
console.log(result)


function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let starRow = input[2];
    let starCol = input[3];
 
    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }
 
    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }
 
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

orbit([4, 4, 0, 0])

orbit([5, 5, 2, 0])
orbit([5, 5, 2, 2])
orbit([3, 3, 2, 2])

console.log('=======-------------')

function spiralMatrix([arr]) {
    printMatrix(getMatrix(arr));

    function getMatrix(arr) {
        let [rows, cols] = arr.split(' ')
                            .filter(x => x != '')
                            .map(Number);
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
        let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
            minRow++;
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
            maxCol--;
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--;
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++;
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
        // console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}

spiralMatrix(['5 5']);

spiralMatrix(['3 3']);