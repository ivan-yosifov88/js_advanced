// function solve() {
//   let inputField = document.getElementById('input').value.split('.').filter(x => x !== '').map(x => x + '.');

  
//   let outputTextField = document.getElementById('output');


//   const maxCountOfParagraphs = 3;

//   let numberOfParagraphs = Math.ceil(inputField.length / maxCountOfParagraphs);

//   for (let index = 0; index < numberOfParagraphs; index ++){
//       outputTextField.innerHTML += `<p>${inputField.splice(0,3).join('')}</p>`
    
//   }
// }


function solve() {
  let inputField = document.getElementById('input').value.split('.').filter(x => x !== '').map(x => x + '.');

  
  let outputTextField = document.getElementById('output');

  let text = []


  for (let index = 1; index <= inputField.length; index ++){
    text.push(inputField[index - 1])
    if (index % 3 == 0 || index == inputField.length){
      outputTextField.innerHTML += `<p>${text.join('')}</p>`
      text = []
    }
  }
}