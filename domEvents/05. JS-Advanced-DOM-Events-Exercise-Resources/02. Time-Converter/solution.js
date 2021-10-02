function attachEventsListeners() {
    const daysInputField = document.querySelector('#days');
    const hoursInputField = document.querySelector('#hours');
    const minutesInputField = document.querySelector('#minutes');
    const secondsInputField = document.querySelector('#seconds');

    const daysButton = document.querySelector('#daysBtn');
    daysButton.addEventListener('click', convertDays)

    const hoursButton = document.querySelector('#hoursBtn');
    hoursButton.addEventListener('click', convertHours)

    const minutesButton = document.querySelector('#minutesBtn');
    minutesButton.addEventListener('click', convertMinutes)

    const secondsButton = document.querySelector('#secondsBtn');
    secondsButton.addEventListener('click', convertSeconds)

    function convertDays(){
        let days = Number(daysInputField.value)
        hoursInputField.value = days * 24
        minutesInputField.value = days * 1440   
        secondsInputField.value = days * 864000
    }

    function convertHours(){
        let hours = Number(hoursInputField.value)
        daysInputField.value = hours / 24 
        minutesInputField.value = hours * 60 
        secondsInputField.value = hours * 3600
    }
    function convertMinutes(){
        let minute = Number(minutesInputField.value)
        hoursInputField.value = minute / 60
        daysInputField.value = minute / 1440
        secondsInputField.value = minute * 60
    }
    function convertSeconds(){
        let seconds = Number(secondsInputField.value)
        daysInputField.value = seconds / 86400
        hoursInputField.value = seconds / 3600
        minutesInputField.value = seconds / 60  
    }

}