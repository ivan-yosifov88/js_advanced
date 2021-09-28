function solve() {
    const decimalNumberInput = document.querySelector('#input');
    const optionMenu = document.querySelector('#selectMenuTo');
    const button = document.querySelector('#container button');
    const resultField = document.querySelector('#result')

    let binaryOption = document.createElement('option')
    let hexadecimalOption = document.createElement('option')

    binaryOption.value = 'binary';
    binaryOption.text = 'Binary';

    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.text = 'Hexadecimal';

    optionMenu.add(binaryOption);
    optionMenu.add(hexadecimalOption)

    button.addEventListener('click', onClick)

    
    function onClick(){
        let convertedNumber 
        let selectedOption = optionMenu.value
        if (selectedOption == 'binary'){
            convertedNumber = Number(decimalNumberInput.value).toString(2);
        }else if (selectedOption == 'hexadecimal'){
            convertedNumber = Number(decimalNumberInput.value).toString(16).toUpperCase();
        }
        resultField.value = convertedNumber;
    }
}