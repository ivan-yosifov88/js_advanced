function extractText() {
    const liElements = [...document.getElementsByTagName('li')];
    const elementText = liElements.map(element => element.textContent);
    
    document.getElementById("result").value = elementText.join('\n')

}