function ticTacToeGame(arrayOfMoves){
    let board = getEmptyBoard()
    let playTheGAme = playGame(arrayOfMoves, board)

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
    function isMoveValid(board, playerMove){
        let rowIndex;
        let colIndex; 
        let size = board.length;
        [(rowIndex), colIndex] = playerMove;
        return 0 <= rowIndex < size && 0 <= colIndex < size && board[rowIndex][colIndex] === false;

    }
    function playGame(arrayOfMoves, board){
        let firstPlayerSymbol = 'X';
        let secondPlayerSymbol = 'O';
        for (let i = 0; i < arrayOfMoves.length; i ++){
            let playerMove = arrayOfMoves[i].split(' ')
            .map(element => Number(element));
            if (isMoveValid(board, playerMove)){
                let player = firstPlayerSymbol;
                [currentRow, currentCol ]= playerMove
                board[currentRow][currentCol] = player
                if (isPlayerWin(board, player)){
                    console.log(`Player ${player} wins!`)
                    for (let element of board){
                        console.log(element.join('\t'))
                    }
                    return true
                }
            }
            else{
                console.log("This place is already taken. Please choose another!")
                continue
            }
           if (!isBoardFull(board)){
            break
            }
            [firstPlayerSymbol, secondPlayerSymbol] = [secondPlayerSymbol, firstPlayerSymbol]
           }
        console.log('The game ended! Nobody wins :(') 
        for (let element of board){
            console.log(element.join('\t'))
        }
        return true
    
    }
    function isPlayerWin(board,player){
        let size = board.length
        let count
        for (let row = 0; row < size; row ++){
            count = 0
            for (let col = 0; col < size; col ++ ){
                if (player === board[row][col]){
                    count ++
                }
                if (count == size){
                    return true
                }
            }
        }
        for (let col = 0; col < size; col ++ ){
            count = 0
            for (let row = 0; row < size; row ++){
                if (player === board[row][col]){
                    count ++
                }
                if (count == size){
                    return true
                }
            }
        }
        count = 0
        for (let row = 0; row < size; row ++){
            for (let col = row; col < row + 1;  col++ ){
                if (player === board[row][col]){
                    count ++
                }
            }
            if (count == size){
                return true
            }
        }
        count = 0
        let col = 0
        for (let row = size - 1; 0 <= row ; row --){
           
            if (player === board[row][col]){
                count ++
                
            }
            if (count == size){
                return true
            }
            col ++ 
        }
    }
    function isBoardFull(board){

        for (let row = 0; row < board.length; row ++){
            for (let val of board[row]){
                if (val == false){
                    return true
                }
            }
            
    }
    return false
     }
}


// ticTacToeGame(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"])

// ticTacToeGame(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"])

// ticTacToeGame(["0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 2",
// "1 1",
// "2 1",
// "2 2",
// "0 0"]
// )
ticTacToeGame(["0 2",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"0 2",
"0 0"])