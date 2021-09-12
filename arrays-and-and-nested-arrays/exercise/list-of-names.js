function sortNamesInArray(arrayOfNames){
    const sortedArray = arrayOfNames.sort((a, b) => a.localeCompare(b))
    sortedArray.forEach((element, index) => console.log(`${index + 1}.${element}`))
}

console.log(sortNamesInArray(["John", "Bob", "Christina", "Ema"]))
console.log(sortNamesInArray(["John", "Bob", "christina", "Ema"]))