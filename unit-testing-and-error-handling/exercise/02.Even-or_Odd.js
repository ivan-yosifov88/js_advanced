function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

module.exports = {
    isOddOrEven
}

console.log(isOddOrEven(''))
console.log(isOddOrEven('baba'))
console.log(isOddOrEven('bab'))

console.log(isOddOrEven({}))

console.log(isOddOrEven([]))

console.log(isOddOrEven(4))

console.log(isOddOrEven())
