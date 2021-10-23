class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    };
    addCar(carModel, carNumber){
        if (this.capacity == 0){
            throw new Error("Not enough parking space.");
        };
        this.vehicles.push({
            carModel, 
            carNumber,
            payed: false,
        });
        this.capacity --;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    };
    removeCar(carNumber){
        let currentCarWithNumber = this.vehicles.find(car => car.carNumber == carNumber);
        if (currentCarWithNumber == undefined){
            throw new Error("The car, you're looking for, is not found.")
        }
        if (currentCarWithNumber.payed == false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        let carToRemove = this.vehicles.indexOf(currentCarWithNumber)
        this.vehicles.splice(carToRemove, 1)
        return `${carNumber} left the parking lot.`
    };
    pay(carNumber){
        let currentCarWithNumber = this.vehicles.find(car => car.carNumber == carNumber);
        if (currentCarWithNumber == undefined){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currentCarWithNumber.payed){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        currentCarWithNumber.payed = true
        return `${carNumber}'s driver successfully payed for his stay.`
    };
    getStatistics(carNumber){
        let currentCarWithNumber = this.vehicles.find(car => car.carNumber == carNumber);
        if (currentCarWithNumber != undefined){
            let paymentStatus = currentCarWithNumber.payed ? 'Has Payed' : 'Not payed'
            return `${currentCarWithNumber.carModel} == ${currentCarWithNumber.carNumber} - ${paymentStatus}`
        }
        let result = [`The Parking Lot has ${this.capacity} empty spots left.`,]
        let sortedVehiclesByModel = this.vehicles
        .sort((a, b) => a.carModel.localeCompare(b.carModel))
        .forEach(car => result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has Payed' : 'Not payed'}`))
        
        return result.join('\n')
    };

}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));

console.log(parking.addCar("Alo", "TX3CA"));
console.log(parking.addCar("kurec", "91CA"));


console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.removeCar("TX3691CA"));