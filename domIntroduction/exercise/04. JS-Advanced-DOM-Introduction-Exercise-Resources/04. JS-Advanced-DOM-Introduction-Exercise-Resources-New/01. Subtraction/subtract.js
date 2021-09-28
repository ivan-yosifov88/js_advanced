function subtract() {
    let firstOperand = Number(document.getElementById('firstNumber').value);
    let secondOperand = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = firstOperand - secondOperand;
}