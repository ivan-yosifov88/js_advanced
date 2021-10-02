function create(words) {
   const divContentElement = document.querySelector('#content');
   for (let word of words){
      const divElement = document.createElement('div');
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement)
      divElement.addEventListener('click', reveal);
      divContentElement.appendChild(divElement);
   }
   function reveal(event){
      event.ch
      event.target.childNodes[0].style.display = ''
   }
}