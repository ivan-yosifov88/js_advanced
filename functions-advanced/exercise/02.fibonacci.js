function getFibonator(){
    let previousFibonacci = 0
    let currentFibonacci = 1
    return nextFibonacci
    function nextFibonacci(){
        let fibonacci = currentFibonacci
        currentFibonacci = previousFibonacci + currentFibonacci
        previousFibonacci = fibonacci
        return fibonacci

    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib());
console.log(fib()); 
console.log(fib()); 
console.log(fib());  