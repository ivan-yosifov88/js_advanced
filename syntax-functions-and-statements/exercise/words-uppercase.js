function convertWordsToUpper(text_input){
    let pattern = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    let textWordsOnly = text_input.split(pattern)
    let upperLettersOnly = []
    for (let element of textWordsOnly){
        if (element === ''){
            continue
        }
        let subString= element.toUpperCase()
        upperLettersOnly.push(''+subString)
    }
    console.log(upperLettersOnly.join(', ')) 
}
convertWordsToUpper('Hi, how are you?')