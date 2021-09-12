function sortNumbersInStrangeWay(numberArray){
    let sortedArray = []
    let finalSortedArray = []
    sortedArray = numberArray.sort((a, b) => a - b);
    let index = 0
    while (sortedArray.length > 0){
        let currentElement
        if (index % 2 == 0){
            currentElement = sortedArray.shift()
        }
        else{
            currentElement = sortedArray.pop()
        }
        finalSortedArray.push(currentElement)
        index ++
    }
    return finalSortedArray

}

console.log(sortNumbersInStrangeWay([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))