function solve() {
    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#date');
    const allSections = document.querySelectorAll('section');
    const openSectionDiv = allSections[1].querySelectorAll('div')[1];
    const inProgressSection = allSections[2].querySelectorAll('div')[1];
    const completeSection = allSections[3].querySelectorAll('div')[1];

    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', addTask);

// the 'if' statement should not use the 'isValidDate' function ?????
    function addTask(event){
        if (task.value != '' && description.value != '' && dueDate.value != ''){
            event.preventDefault()

            let articleElement = document.createElement('article');
            
            let h3Element = document.createElement('h3');
            h3Element.textContent = task.value;

            let firstParagraph = document.createElement('p');
            firstParagraph.textContent = `Description: ${description.value}`;

            let secondParagraph = document.createElement('p');
            secondParagraph.textContent = `Due Date: ${dueDate.value}`;

            let divElement = document.createElement('div');
            divElement.className = 'flex';

            let startButton = document.createElement('button');
            startButton.className = 'green';
            startButton.textContent = 'Start';
            startButton.addEventListener('click', startTask);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'red';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTask);

            divElement.appendChild(startButton);
            divElement.appendChild(deleteButton);

            articleElement.appendChild(h3Element);
            articleElement.appendChild(firstParagraph);
            articleElement.appendChild(secondParagraph);
            articleElement.appendChild(divElement);

            openSectionDiv.appendChild(articleElement)
            clearAddTaskField()
        }
    }
    function isValidDate(dateString) {
        const regEx = /^\d{4}\.\d{2}\.\d{2}$/;
        if(!dateString.match(regEx)){
            return false
        }
        let checkPattern = /\./ig
        dateString = dateString.replaceAll(checkPattern, '-')
        let date = new Date(dateString);
        let dateNum = date.getTime();
        if(!dateNum && dateNum !== 0){
            return false
        } 
        return date.toISOString().slice(0,10) === dateString;
      }  
    function clearAddTaskField(){
        task.value = '';
        description.value = '';
        dueDate.value = '';
    }
    function startTask(event){
        let article = event.target.parentElement.parentElement

        let divElement = event.target.parentElement
        divElement.querySelector('.green').remove()

        let finishButton = document.createElement('button');
        finishButton.className = 'orange';
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', finishTask)

        divElement.appendChild(finishButton);

        inProgressSection.appendChild(article)
    }
    function deleteTask(event){
        event.target.parentElement.parentElement.remove()
    }
    function finishTask(event){
        let articleElement = event.target.parentElement.parentElement
        
        let divElement = event.target.parentElement
        divElement.remove()

        completeSection.appendChild(articleElement)
    }
}