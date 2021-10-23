function solve() {
    const lectureName = document.querySelector('input[name=lecture-name]');
    const dateOfLecture = document.querySelector('input[name=lecture-date]');
    const moduleName = document.querySelector('select[name=lecture-module]');
    const trainings = document.querySelector('.modules');

    const addButton = document.querySelector('.action .form-control button');
    addButton.addEventListener('click', addTraining);

    const allModules = {};

    function addTraining(event){
        if (isAllFieldsValid() == false){
            return
        }
        event.preventDefault()
        const moduleListOfLectures = document.querySelectorAll('.module ul li')
        let moduleUlElement
        if (allModules[moduleName.value] == undefined){
            allModules[moduleName.value]  = []
            moduleUlElement = createTraining() 
        }
        allModules[moduleName.value].push({
            name: lectureName.value,
            date: dateFormatter(dateOfLecture.value)
        })
        let sortedLectures = allModules[moduleName.value].sort((a, b) => a.date.localeCompare(b.date))
        sortedLectures.forEach(record => moduleUlElement.appendChild(createLecture(allModules[moduleName.value].name, allModules[moduleName.value].date)))
        
        trainings.appendChild(moduleUlElement);
    }
    function deleteTraining(){
        
    }
    function createTraining(){
        const divModule = document.createElement('div');
        divModule.classList.add('module');

        const headingMOduleName = document.createElement('h3');
        headingMOduleName.textContent = `${moduleName.value.toUpperCase()}-MODULE`
        const ulElement = document.createElement('ul');

        divModule.appendChild(headingMOduleName);
        divModule.appendChild(ulElement);

        return divModule
    }
    function createLecture(name, date){
        const liElement = document.createElement('li');
        liElement.classList.add('flex');
        const headingDate = document.createElement('h4');
        
        headingDate.textContent = `${name} - ${date}`

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Del';
        deleteButton.addEventListener('click', deleteTraining);

        liElement.appendChild(headingDate);
        liElement.appendChild(deleteButton);

        return liElement
    }
    function isAllFieldsValid(){
        if (lectureName.value == '' || dateOfLecture.value == '' || moduleName.value == 'Select module'){
            return false
        }
        return true
    }
    function dateFormatter(date){
        let [currentDate, time] = date.split('T')
        let dateWithSlashes = currentDate.replace(/-/g, '/')
        return `${dateWithSlashes} - ${time}`
    }
};