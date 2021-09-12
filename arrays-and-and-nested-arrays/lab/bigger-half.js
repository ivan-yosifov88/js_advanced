function getSortedBiggerHalf(numberCollection){
    let sortedNUmberCollection = numberCollection.sort((a, b) => a - b)
    let sliceStartIndex
    let collectionLength = sortedNUmberCollection.length
    let slicedSortedCollection = []
    if (collectionLength % 2 != 0){
        sliceStartIndex = (collectionLength -1) / 2
    }
    else{
        sliceStartIndex = collectionLength / 2 
    }
    slicedSortedCollection = sortedNUmberCollection.slice(sliceStartIndex, collectionLength)
    return slicedSortedCollection
}
console.log(getSortedBiggerHalf([4, 7, 2, 5]))
console.log(getSortedBiggerHalf([3, 19, 14, 7, 2, 19, 6]))