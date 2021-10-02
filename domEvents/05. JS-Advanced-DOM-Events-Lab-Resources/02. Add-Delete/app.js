function addItem() {
    const inputField = document.querySelector('#newItemText');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputField.value;
    console.log(newLiElement);
    document.querySelector('#items').appendChild(newLiElement);
    inputField.value = ''

    const buttonDelete = document.createElement('a');
    buttonDelete.href = '#';
    buttonDelete.textContent = '[Delete]';
    buttonDelete.addEventListener('click', deleteElement);

    newLiElement.appendChild(buttonDelete)
    

    function deleteElement(event){
        const parentElement = event.target.parentNode
        parentElement.remove()
        
    }
}