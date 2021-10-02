function solve() {
    let table = document.querySelector('#exercise table');
    let tableBody = table.querySelector('tbody');
    let resultField = document.querySelector('#check p');

    const buttons = table.querySelectorAll('tfoot tr td button');
    const quickButton = buttons[0];
    const clearButton = buttons[1];
    quickButton.addEventListener('click', quickCheck);
    clearButton.addEventListener('click', clearField);

    function quickCheck(){
        if (isSudomuSolve()){
            resultField.textContent = 'You solve it! Congratulations!';
            resultField.style.color = "green";
            table.style.border = "2px solid green";

        }else{
            resultField.textContent = 'NOP! You are not done yet...';
            resultField.style.color = "red";
            table.style.border = "2px solid red";
        }
    }
    function clearField(){
        let allInputFields = tableBody.querySelectorAll('tr input');
        for (let input of allInputFields){
            input.value = ''
        }
        resultField.textContent = ''
        resultField.style.color = ''
        table.style.border = ""
    }
    function isSudomuSolve(){
        let board = Array.from(tableBody.querySelectorAll('tr'))
        .map(row => Array.from(row.querySelectorAll('input'))
            .map(cell => Number(cell.value)));

        for (let row = 0; row < board.length; row ++){
            if(!isLineValid(board[row])){
                return false
            }
            let columnLine = []
            for (let column = 0; column < board[row].length; column ++){
                columnLine.push(board[column][row])
            }
            if(!isLineValid(columnLine)){
                return false
            }
        }
        return true
    }
    function isLineValid(line){
        let matches = {
            1:0,
            2:0,
            3:0
        }
        line.forEach(el => matches[el]++)
        if (Object.values(matches).every(x => x == 1 )){
            return true
        }else{
            return false
        }
    }
}