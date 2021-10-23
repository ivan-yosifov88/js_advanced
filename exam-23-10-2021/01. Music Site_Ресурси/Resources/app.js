window.addEventListener('load', solve);

function solve() {
    const genreInputField = document.querySelector('#genre');
    const songNameInputField = document.querySelector('#name');
    const authorInputField = document.querySelector('#author');
    const dateOfCreationInputField = document.querySelector('#date');
    const addButton = document.querySelector('#add-btn');
    addButton.addEventListener('click', addSong);

    const inputs = [
        genreInputField,
        songNameInputField,
        authorInputField,
        dateOfCreationInputField
    ]

    const collectionOfSongsSection = document.querySelector('.all-hits-container');
    const savedSongSection = document.querySelector('.saved-container');
    const totalLikesSection = document.querySelector('.likes p');

    function addSong(event){
        if (inputs.some(input => input.value == '')){
            return
        }
        event.preventDefault()
        const hitsInfoDiv = document.createElement('div');
        hitsInfoDiv.classList.add('hits-info');

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';

        const genreHeading = document.createElement('h2');
        genreHeading.textContent = `Genre: ${genreInputField.value}`;

        const nameHeading = document.createElement('h2');
        nameHeading.textContent = `Name: ${songNameInputField.value}`;

        const authorHeading = document.createElement('h2');
        authorHeading.textContent = `Author: ${authorInputField.value}`;
        
        const dateHeading = document.createElement('h3');
        dateHeading.textContent = `Date: ${dateOfCreationInputField.value}`;

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save song';
        saveButton.addEventListener('click', saveSong);

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent = 'Like song';
        likeButton.addEventListener('click', likeSong);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', deleteSong)

        hitsInfoDiv.appendChild(imgElement);
        hitsInfoDiv.appendChild(genreHeading);
        hitsInfoDiv.appendChild(nameHeading);
        hitsInfoDiv.appendChild(authorHeading);
        hitsInfoDiv.appendChild(dateHeading);
        hitsInfoDiv.appendChild(saveButton);
        hitsInfoDiv.appendChild(likeButton);
        hitsInfoDiv.appendChild(deleteButton);



        collectionOfSongsSection.appendChild(hitsInfoDiv)
        inputs.forEach(input => input.value = '')
    };
    function saveSong(event){
        const divElement = event.target.parentElement
        let saveButton = document.querySelector('.save-btn');
        saveButton.remove();
        let likeButton = document.querySelector('.like-btn');
        likeButton.remove();
        savedSongSection.appendChild(divElement);
    };
    function likeSong(event){
        event.target.disabled = true;
        let [text, likesCount] = totalLikesSection.textContent.split(': ');
        likesCount = Number(likesCount);
        likesCount ++;
        totalLikesSection.textContent = `${text}: ${likesCount}`;


    };
    function deleteSong(event){
        event.target.parentElement.remove()
    };

}