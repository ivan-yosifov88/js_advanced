function add(number) {
    let sumNumbers = number;

    function sum(num) {
        sumNumbers += num;
        return sum;
    }
    sum.toString = () => {
        return sumNumbers
    }
    return sum
}

console.log(add(1)(6)(-3).toString())