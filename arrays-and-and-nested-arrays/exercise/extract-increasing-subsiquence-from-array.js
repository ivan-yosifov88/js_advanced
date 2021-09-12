function getIncreasingSubsequence(numberArray){
    let resultSubsequence = numberArray.reduce((arr, element) => {
        if (arr.length == 0 | arr[arr.length - 1]  <= element){
            arr.push(element)
        }
        if (arr.length == 0){
            arr.push(element)
        }
        return arr
    }, []);
    return resultSubsequence
}

// function getIncreasingSubsequence(numberArray){
//     let resultSubsequence = [numberArray[0]]
//     for (let i = 1; i < numberArray.length; i ++){
//         let previousValue = resultSubsequence[resultSubsequence.length - 1]
//         if (previousValue <= numberArray[i]){
//             resultSubsequence.push(numberArray[i])
//         }

//     }
//     return resultSubsequence
// }


console.log(getIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]))
console.log(getIncreasingSubsequence([1, 2, 3,4]))
console.log(getIncreasingSubsequence([20, 3, 2, 15,6, 1]))