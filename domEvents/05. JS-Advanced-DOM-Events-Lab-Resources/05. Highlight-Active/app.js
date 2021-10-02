function focused() {
   const divElements = document.querySelectorAll('div input');
//    const divElements = Array.from(document.getElementsByTagName('input'));

   for (let currentDiv of divElements){
       currentDiv.addEventListener('focus', onFocus);
       currentDiv.addEventListener('blur', onBlur);
   }

   function onFocus(event){
        event.target.parentNode.className = 'focused';

   }

   function onBlur(event){
        event.target.parentNode.className  = '';
   }

}