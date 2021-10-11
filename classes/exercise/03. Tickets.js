function tickets(arrayOfStrings, sortingCriteria) {
    const objectArray = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };
    function generateObjectArray() {
        for (let line of arrayOfStrings) {
            let [destination, price, status] = line.split('|');
            objectArray.push(new Ticket(destination, Number(price), status))
        }
    }
    function sortArrayByCriteria(a, b){
        if (sortingCriteria == 'destination' || sortingCriteria == 'status'){
            return a[sortingCriteria].localeCompare(b[sortingCriteria])
        }else if (sortingCriteria == 'price'){
            return a - b 
        }
    }
    generateObjectArray()
    return objectArray.sort(sortArrayByCriteria)
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))

console.log('_______________')

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'))

console.log('_________________')

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'))