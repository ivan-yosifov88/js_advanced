function solve() {
    const [movieName, hall, ticketPrice] = document.querySelectorAll("#container input");

    const onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', addMovie);

    const  movieSection = document.querySelector('#movies ul');

    const archiveSection = document.querySelector('#archive ul'); 

    const clearButton = document.querySelectorAll('#archive button')[document.querySelectorAll('#archive button').length - 1]

    clearButton.addEventListener('click', clearArchive)



    function addMovie(event){
        if (movieName.value != '' && hall.value != '' && ticketPrice.value != '' && !isNaN(ticketPrice.value)){
            event.preventDefault()
            createMovieEvent()
        }
    }
    function createMovieEvent(){

        const liElement = document.createElement('li');
        const spanElement = document.createElement('span');
        spanElement.textContent = movieName.value

        const strongElement = document.createElement('strong');
        strongElement.textContent = `Hall: ${hall.value}`
        const divElement = document.createElement('div');

        liElement.appendChild(spanElement)
        liElement.appendChild(strongElement)

        const inputElement = document.createElement('input');
        inputElement.placeholder = 'Tickets Sold'
    
        const archiveButton = document.createElement('button')
        archiveButton.textContent = 'Archive';
        archiveButton.addEventListener('click', archiveMovie)

        const strongDivElement = document.createElement('strong')
        strongDivElement.textContent = Number(ticketPrice.value).toFixed(2);

        divElement.appendChild(strongDivElement);
        divElement.appendChild(inputElement);
        divElement.appendChild(archiveButton)

        liElement.appendChild(divElement)

        movieSection.appendChild(liElement)
        
        clearInputs()

    }
    function archiveMovie(event){
        const parent = event.target.parentElement.parentElement
        const input = parent.querySelector('input').value
        if (input != '' && !isNaN(input)){
            const archiveLiElement = document.createElement('li');

            const archiveSpanElement = document.createElement('span');
            archiveSpanElement.textContent = parent.querySelector('span').textContent

            const archiveStrongElement = document.createElement('strong');
            archiveStrongElement.textContent = `Total amount: ${(Number(input) * Number(parent.querySelector('div strong').textContent)).toFixed(2)}`

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete"
            deleteButton.addEventListener('click', deleteRecord)

            archiveLiElement.appendChild(archiveSpanElement);
            archiveLiElement.appendChild(archiveStrongElement)
            archiveLiElement.appendChild(deleteButton)

            archiveSection.appendChild(archiveLiElement)
            parent.remove()
        }
    }
    function deleteRecord(ev){
        ev.target.parentElement.remove()
    }
    function clearArchive(ev){
        const archiveField = ev.target.parentElement.querySelectorAll('li')
        for (let li of archiveField){
            li.remove()
        }
    }
    function clearInputs(){
        movieName.value = ''
        hall.value = ''
        ticketPrice.value = ''
    }
}