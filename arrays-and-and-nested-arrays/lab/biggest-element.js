function findBiggestElementInNestedArray(nestedNUmberCollection){
    let biggest_number = Number.MIN_SAFE_INTEGER
    for (let row = 0; row < nestedNUmberCollection.length; row++){
        for (let col = 0; col < nestedNUmberCollection[row].length; col ++){
            if (nestedNUmberCollection[row][col] >= biggest_number){
                biggest_number = nestedNUmberCollection[row][col] 
            }
        }
    }
    return biggest_number
}
console.log(findBiggestElementInNestedArray([[20, 50, 10],
    [8, 33, 145]]))
console.log('\n')
console.log(findBiggestElementInNestedArray([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))
console.log(findBiggestElementInNestedArray([[20, 50, 10],
    [8, 33, 145]]))