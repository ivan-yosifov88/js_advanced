function solve() {
    // const allSections = document.querySelectorAll('section div:last-child')
    const allSections = Array.from(document.querySelectorAll('section div:last-child'))
    const [addSection, openSection, inProgressSection, completeSection] = allSections
    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#date');
    const allInputFields = [task, description, dueDate]
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', addTack);

    function addTack(event) {
        event.preventDefault()
        if (allInputFields.some(input => input.value.trim() == '')) {
            return;
        }

        const startButton = createElement('button', { "className": "green" }, 'Start');
        const deleteButton = createElement('button', { 'className': 'red' }, 'Delete')
        const article = createElement('article', {},
            createElement('h3', {}, task.value),
            createElement('p', {}, `Description: ${description.value}`),
            createElement('p', {}, `Due Date: ${dueDate.value}`),
            createElement('div', { 'className': "flex"},
                startButton,
                deleteButton,
            ));

        startButton.addEventListener('click', startTack);
        deleteButton.addEventListener('click', deleteTack);

        openSection.appendChild(article)
    };
    function startTack(event){
        let currentArticle = event.target.parentElement.parentElement;
        let divElement= event.target.parentElement;
        event.target.remove();

        const finishButton = createElement('button', { "className": "orange" }, 'Finish');
        finishButton.addEventListener('click', finishTack)

        divElement.appendChild(finishButton);
        inProgressSection.appendChild(currentArticle);
    };
    function deleteTack(event){
        let currentArticle = event.target.parentElement.parentElement
        currentArticle.remove()
    };
    function finishTack(event){
        let currentArticle = event.target.parentElement.parentElement
        let divElement= event.target.parentElement;
        divElement.remove()
        completeSection.appendChild(currentArticle)
    }

    function createElement(type, attributes, ...content) {
        let newElement = document.createElement(type);
        for (let property in attributes) {
            newElement[property] = attributes[property];
        };
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            newElement.appendChild(item);
        }
        return newElement;
    }
}