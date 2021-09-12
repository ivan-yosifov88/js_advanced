function getBonacciSequence(n, k){
    let sequence = [1]
    let newElement 
    for (let count = 1; count < n; count++){
        if (sequence.length <= k){
            newElement = sequence.slice(0,count + 1)
            sequence.push(newElement.reduce((acc, current)=> acc + current))
        }
        else{
            newElement = sequence.slice(-k, count + 1)
            sequence.push(newElement.reduce((acc, current)=> acc + current))
        }
    }
    return sequence
}
console.log(getBonacciSequence(8, 2))