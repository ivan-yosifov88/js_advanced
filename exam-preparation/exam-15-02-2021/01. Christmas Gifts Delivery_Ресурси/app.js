function solution() {
    const giftAddInputField = document.querySelector('input');
    const sections = document.querySelectorAll('.card ul');
    const listOfGiftsSectionUl = sections[0];
    const sentGiftsSectionUl = sections[1];
    const discardedGiftsSectionUl = sections[2];

    const addButton = giftAddInputField.nextElementSibling;
    addButton.addEventListener('click', addGift);

    function addGift(event){
        // event.preventDefault()
        let listOfGiftArray = Array.from(listOfGiftsSectionUl.querySelectorAll('li'));

        let newGiftLiElement = document.createElement('li');
        newGiftLiElement.classList.add("gift");
        newGiftLiElement.textContent = giftAddInputField.value;

        const sendButton = document.createElement('button');
        sendButton.id = "sendButton";
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', sendGift);

        const discardButton = document.createElement('button');
        discardButton.id = "discardButton";
        discardButton.textContent = 'Discard'
        discardButton.addEventListener('click', discardGift)

        newGiftLiElement.appendChild(sendButton);
        newGiftLiElement.appendChild(discardButton)

        listOfGiftArray.push(newGiftLiElement);

        let sortedListOfGits = listOfGiftArray
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(liElement => listOfGiftsSectionUl.appendChild(liElement))

        giftAddInputField.value = ''
    };
    function sendGift(event){
        let currentLiElement = event.target.parentElement
        let sendedGiftLiElement = document.createElement('li');
        sendedGiftLiElement.textContent = currentLiElement.childNodes[0].textContent
        sendedGiftLiElement.classList.add('gift');
        sentGiftsSectionUl.appendChild(sendedGiftLiElement);
        currentLiElement.remove()

    };
    function discardGift(event){
        let currentLiElement = event.target.parentElement
        let discardedGiftLiElement = document.createElement('li');
        discardedGiftLiElement.textContent = currentLiElement.childNodes[0].textContent
        discardedGiftLiElement.classList.add('gift');
        discardedGiftsSectionUl.appendChild(discardedGiftLiElement);
        currentLiElement.remove()
    };

}   