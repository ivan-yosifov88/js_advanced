function addItem() {
    const inputField = document.querySelector('#newItemText');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputField.value;
    console.log(newLiElement);
    document.querySelector('#items').appendChild(newLiElement);
    inputField.value = ''
}