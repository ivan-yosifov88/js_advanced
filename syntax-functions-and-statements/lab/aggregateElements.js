function aggregateElements(arrayWithNumbers){
    let sumOfAllElements = getSumOfElements(arrayWithNumbers)
    let sumOfInverseValue = getSumOfInverseValues(arrayWithNumbers)
    let concatenate = concatenateNumbers(arrayWithNumbers)
    function getSumOfElements(arrayWithNumbers){
        let sumOfElements = 0
        for (const element of arrayWithNumbers)
        sumOfElements += Number(element)
        return sumOfElements

    } 
    function getSumOfInverseValues(arrayWithNumbers){
        let sumOfElements = 0
        for (const element of arrayWithNumbers)
        sumOfElements += 1/Number(element)
        return sumOfElements

    }
    function concatenateNumbers(arrayWithNumbers){
        let newConcatenateNumber = ''
        for (const element of arrayWithNumbers)
        newConcatenateNumber += element
        return newConcatenateNumber 
    }
    console.log(sumOfAllElements)
    console.log(sumOfInverseValue)
    console.log(concatenate)
}
aggregateElements([2, 4, 8, 16])