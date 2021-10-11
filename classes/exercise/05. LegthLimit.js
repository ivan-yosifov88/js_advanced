class Stringer {
    constructor(string, number){
        this.innerString = string;
        this.innerLength = number;
    }
    increase(length){
        this.innerLength += length
    }
    decrease(length){
        if (this.innerLength < length){
            this.innerLength = 0;
        }else{
            this.innerLength -= length
        }
    }
    toString(){
        if (this.innerLength == 0){
            return "..."
        }else if (this.innerLength < this.innerString.length){
            let cutString = this.innerString.slice(0, this.innerLength) 
            return`${cutString}...`
        }else{
            return `${this.innerString}`
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test