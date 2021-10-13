(function arrayExtension(){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
    Array.prototype.skip = function(n){
        return this.slice(Number(n));
    };
    Array.prototype.take = function(n){
        return this.slice(0, Number(n));
    };
    Array.prototype.sum = function(){
        return this.reduce((acc, current) => acc + current, 0);
    };
    Array.prototype.average = function(){
        return this.sum() / this.length;
    };
})();


let myArray = [1, 2, 3, 4, 5]
console.log(myArray.last())
console.log(myArray.skip(2))
console.log(myArray.take(3))
console.log(myArray.sum())
console.log(myArray.average())
