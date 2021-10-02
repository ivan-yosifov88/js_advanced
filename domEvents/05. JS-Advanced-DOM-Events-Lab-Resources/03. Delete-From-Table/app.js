function deleteByEmail() {
     const emailsList = document.querySelectorAll('tbody tr :nth-child(2)');
     const inputField = document.querySelector('[type]');
     const resultField = document.querySelector('#result');

     for (let cell of emailsList){
          if (cell.textContent == inputField.value){
               cell.parentNode.remove()
               inputField.value = ''
               return resultField.textContent = 'Deleted.'
               
               
          }
     }
     inputField.value = ''
     return resultField.textContent = 'Not found.'
     

}