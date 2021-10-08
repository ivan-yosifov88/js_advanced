function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

module.exports = {
    isSymmetric
}
console.log(JSON.stringify([1, 2, '2', 1]))
console.log(JSON.stringify([1, '2', 2, 1]))
