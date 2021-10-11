class List {
    constructor(){
        this.size = 0;
        this.numberList = [];
    }
    add(number){
        this.numberList.push(number);
        this.size ++;
        this.numberList.sort((a, b) => a - b );
    }
    remove(index){
        if (!List.isIndexValid(index, this.numberList)){
            throw new Error('Index out of range');
        }
        this.size --;
        this.numberList.splice(index, 1);
    }
    get(index){
        if (!List.isIndexValid(index, this.numberList)){
            throw new Error('Index out of range');
        }
        return this.numberList[index]
    }
    static isIndexValid(index, numbers){
        return 0 <= index && index < numbers.length;
    }
}




let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
