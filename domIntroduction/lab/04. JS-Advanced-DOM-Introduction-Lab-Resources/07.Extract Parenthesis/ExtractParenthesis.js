// function extract(content) {
//     text = document.getElementById('content').textContent
//     let words = []
//     for (let i = 0; i < text.length; i ++){
//         if (text[i] == '('){
//             let word = ''
//             for (j = i + 1; j < text.length; j ++){
//                 if (text[j] == ')'){
//                     words.push(word)
//                     break
//                 }
//                 word += text[j]
//             }
//         }
//     }
//     return words.join('; ')
// }

// solution from presentation
function extract(content){
    let paragraph = document.getElementById(content).textContent;
    let pattern = /\(([^]+)\)/g;
    let result = [];
    let match = pattern.exec(paragraph);
    while (match){
        result.push(match[1])
        match = pattern.exec[paragraph]
    }
    return result.join('; ')
}