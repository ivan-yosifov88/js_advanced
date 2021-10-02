function encodeAndDecodeMessages() {
    const textFields = document.querySelectorAll('textarea');

    const messageField = textFields[0];
    const encodeButton = messageField.parentElement.querySelector('button');
    encodeButton.addEventListener('click', encodeMessage);

    const receivedMessageField = textFields[1];
    const decodeButton = receivedMessageField.parentElement.querySelector('button');
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage(){
        let messageText = messageField.value
        let encodedMessage = ''
        for (let char of messageText){
            encodedMessage += String.fromCharCode(char.charCodeAt() + 1)
        }
        receivedMessageField.value = encodedMessage
        messageField.value = '' 
    }
    function decodeMessage(){
        let messageText = receivedMessageField.value
        let encodedMessage = ''
        for (let char of messageText){
            encodedMessage += String.fromCharCode(char.charCodeAt() - 1)
        }
        receivedMessageField.value = encodedMessage
    }
    messageField.value = '' 
    receivedMessageField.value = ''
}