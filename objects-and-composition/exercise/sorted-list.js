function createSortedList(){
    const resultList = []
    function inRange(index, size){
        return 0 <= index && index < size
    }
    function add(element){
        resultList.push(element);
        this.size ++;
        resultList.sort((a, b) => (a - b));
    }
    function remove(index){
        if (inRange(index, this.size)){
            resultList.splice(index, 1);
        this.size --
        }
    }
    function get(index){
        if (inRange(index, this.size)){
            return resultList[index]
        }
    }

    let size = 0
    return {
        size,
        add,
        remove,
        get
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

