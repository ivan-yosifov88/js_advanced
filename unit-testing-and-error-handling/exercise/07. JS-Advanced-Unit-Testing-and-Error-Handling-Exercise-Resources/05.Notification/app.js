function notify(message) {
  const divNotification = document.querySelector('#notification');
  divNotification.textContent = message
  divNotification.style.display = 'block'
  divNotification.addEventListener('click', () =>{
    divNotification.style.display = 'none'
  })
}