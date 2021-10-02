function validate() {
    const inputField = document.getElementById('email').addEventListener('change', passwordValidator);

    function passwordValidator(event){
        const regexPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (regexPattern.test(event.target.value)){
            event.target.classList.remove('error');
        }else{
            event.target.classList.add('error')
        }
    }
}