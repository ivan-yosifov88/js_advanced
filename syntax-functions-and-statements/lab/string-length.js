function calculateSumAndLength(firstLetter, secondLetter, thirdLetter){
    const lettersCount = 3
    lettersTotalLength = firstLetter.length + secondLetter.length + thirdLetter.length
    averageLettersLength = lettersTotalLength / lettersCount
    console.log(lettersTotalLength)
    console.log(Math.floor(averageLettersLength))
}

calculateSumAndLength('chocolate', 'ice cream', 'cake')