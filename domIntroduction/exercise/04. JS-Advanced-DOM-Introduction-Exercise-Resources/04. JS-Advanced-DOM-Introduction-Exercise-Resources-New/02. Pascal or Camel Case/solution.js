function solve() {
  let textInput = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let resultPrinter = document.getElementById('result')

  let textConvertor = stingConvertor(textInput, namingConvention);

  function stingConvertor(text, type){
     if (type == "Camel Case"){
      return convertToCamelCase(text)
    }else if (type == "Pascal Case"){
      return convertToPascalCase(text)
    }else{
      return "Error!"
    }
  }
  function convertToCamelCase(text){
    words = text
    .toLowerCase()
    .split(" ");
    let convertedText = words.shift();
    for (let word of words){
      convertedText +=  word[0].toUpperCase() + word.slice(1)
    }
    return convertedText
  }
  function convertToPascalCase(text){
    words = text
    .toLowerCase()
    .split(" ");
    let convertedText = '';
    for (let word of words){
      convertedText +=  word[0].toUpperCase() + word.slice(1)
    }
    return convertedText
  }
  resultPrinter.innerHTML = textConvertor
}