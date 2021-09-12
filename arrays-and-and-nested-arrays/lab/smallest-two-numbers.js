function getTwoSmallestElements(numberCollection){
    let twoSmallestElements = []
    numberCollection.sort((a, b) => a-b)
    twoSmallestElements = numberCollection.slice(0, 2)
    return twoSmallestElements.join(' ')
}
console.log(getTwoSmallestElements([30, 15, 50, 5]))
console.log(getTwoSmallestElements([3, 0, 10, 4, 7, 3]))