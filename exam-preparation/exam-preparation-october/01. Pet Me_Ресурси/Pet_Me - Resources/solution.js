function solve() {
    const inputFields = Array.from(document.querySelectorAll('#container input'));
    let [name, age, kind, currentOwner] = inputFields

    const adoptionSection = document.querySelector('#adoption ul');
    const adoptedSection = document.querySelector('#adopted ul');

    const addButton = document.querySelector('#container button');
    addButton.addEventListener('click', addPet);

    function addPet(event) {
        if (inputFields.some(input => input.value == '' || isNaN(age.value))) {
            return
        }
        event.preventDefault()

        const liElement = document.createElement('li');
        const pElement = document.createElement('p');
        const strongNameElement = document.createElement('strong');
        strongNameElement.textContent = name.value;
        const strongAgeElement = document.createElement('strong');
        strongAgeElement.textContent = age.value;
        const strongKindElement = document.createElement('strong');
        strongKindElement.textContent = kind.value
        const spanElement = document.createElement('span');
        spanElement.textContent = `Owner: ${currentOwner.value}`

        pElement.appendChild(strongNameElement);
        pElement.appendChild(document.createTextNode(' is a '));
        pElement.appendChild(strongAgeElement);
        pElement.appendChild(document.createTextNode(' year old '));
        pElement.appendChild(strongKindElement);

        const contactButton = document.createElement('button');
        contactButton.textContent = "Contact with owner";
        contactButton.addEventListener('click', contactOwner)

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(contactButton);

        adoptionSection.appendChild(liElement)
        inputFields.forEach(input => input.value = '')

        function contactOwner(event) {

            const divElement = document.createElement('div');
            const createInputNewOwner = document.createElement('input');
            createInputNewOwner.placeholder = "Enter your names";

            contactButton.textContent = 'Yes! I take it!';
            contactButton.removeEventListener('click', contactOwner);
            contactButton.addEventListener('click', changeOwner);

            divElement.appendChild(createInputNewOwner);
            divElement.appendChild(contactButton);

            liElement.appendChild(divElement);

        }
        function changeOwner(event) {
            const divElement = event.target.parentElement;
            const createInputNewOwner = event.target.parentElement.firstChild;
            if (createInputNewOwner.value != '') {
                const button = event.target;
                button.removeEventListener('click', changeOwner);
                button.addEventListener('click', checkedPet);
                button.textContent = "Checked";
                spanElement.textContent = `New Owner: ${createInputNewOwner.value}`;
                liElement.appendChild(button);
                divElement.remove();
                createInputNewOwner.value = '';
                adoptedSection.appendChild(liElement)
            }
        }
        function checkedPet() {
            liElement.remove()
        }

    }

}

