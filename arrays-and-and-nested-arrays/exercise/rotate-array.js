function rotateElementsInArray(arrayOfStrings, rotations){
    while (0 < rotations){
        arrayOfStrings.unshift(...arrayOfStrings.splice(-1))
        rotations -= 1
    }
    return arrayOfStrings.join(' ')
}

console.log(rotateElementsInArray(['1', 
'2', 
'3', 
'4'], 
2))
console.log(rotateElementsInArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15))