function solution(){
    let startingString = '';

    return {
        append,
        removeStart,
        removeEnd,
        print}

    function append(string){
        startingString += string
    };
    function removeStart(n){
        startingString = startingString.slice(n);
    };
    function removeEnd(n){
        startingString = startingString.slice(0, -n);
    }
    function print(){
        console.log(startingString)
    }
}




let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();