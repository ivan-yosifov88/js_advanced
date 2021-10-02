function solve() {
  const allQuizUlElements = document.querySelectorAll('section');
  const resultUlElement = document.querySelector('#results');
  let fieldOfEvent = document.querySelector('body').addEventListener('click', clickAnswer);

  let playerAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents']
  let numberOfRightAnswers = 0

  let questionNumberIndex = 0

  function clickAnswer(event) {
    if (event.target.tagName == "P") {
      if (playerAnswers.includes(event.target.textContent)){
        numberOfRightAnswers ++
      }
      allQuizUlElements[questionNumberIndex].style.display = 'none';
      if (questionNumberIndex < allQuizUlElements.length - 1) {
        questionNumberIndex++
        allQuizUlElements[questionNumberIndex].style.display = 'block';
      } else {
        if (numberOfRightAnswers == playerAnswers.length){
          resultUlElement.querySelector('h1').textContent = "You are recognized as top JavaScript fan!"
          resultUlElement.style.display = 'block'
        }else{
          resultUlElement.querySelector('h1').textContent = `You have ${numberOfRightAnswers} right answers`
          resultUlElement.style.display = 'block'
        }
        
      }
    }
  }


}
