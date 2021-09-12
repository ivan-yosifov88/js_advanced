function sortStringsByLengthAndAlphabetical(stringArray){
    let sortedArray = []
    sortedArray = stringArray.sort((a, b) => {
        if (a.length >  b.length){
            return 1
        }
        if (a.length < b.length){
            return -1
        }
        if (a.length === b.length){
            return a.localeCompare(b)
        }
    })
    return sortedArray.join('\n')
}
console.log(sortStringsByLengthAndAlphabetical(['alpha', 
'beta', 
'gamma']))

console.log(sortStringsByLengthAndAlphabetical(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

))

console.log(sortStringsByLengthAndAlphabetical(['test', 
'Deny', 
'omen', 
'Default']
))