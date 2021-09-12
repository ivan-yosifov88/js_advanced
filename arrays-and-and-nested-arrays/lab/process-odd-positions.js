function processOddPositions(numberCollection){
    let resultNumberCollection = []
    resultNumberCollection = numberCollection
    .filter((arr, index) => index % 2 !== 0)
    .map(element => element *= 2)
    .reverse()
    .join(' ')
    return resultNumberCollection
}
console.log(processOddPositions([10, 15, 20, 25]))
console.log('\n')
console.log(processOddPositions([3, 0, 10, 4, 7, 3]))