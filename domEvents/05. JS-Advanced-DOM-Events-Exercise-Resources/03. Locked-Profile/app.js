function lockedProfile() {
    const mainContent = document.querySelector('#main').addEventListener('click', showMore)

    function showMore(event){
        if (event.target.tagName === 'BUTTON'){
            let element = event.target.parentElement
            if (!event.target.parentElement.querySelector('input[type= "radio"]').checked){
                let hiddenField = element.querySelector('div');
                hiddenField.style.display = hiddenField.style.display == 'block' ? 'none' : 'block';
                element.querySelector('button').textContent = element.querySelector('button').textContent == 'Hide it' ? 'Show More' : 'Hide it'

            }
        }
        
    }
}