function addItem() {
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');
    const selectField = document.querySelector('#menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = textInput.value;
    optionElement.value = valueInput.value;
    selectField.appendChild(optionElement)
    
    textInput.value = '';
    valueInput.value = '';
}