class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    };
    registerParticipant(name, condition, money) {
        if (Object.keys(this.priceForTheCamp).includes(condition) == false){
            throw new Error("Unsuccessful registration at the camp.");
        }
        if (this.listOfParticipants.some(participant => participant.name == name)){
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]){
           return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0,
        });
        return `The ${name} was successfully registered.`;
    };
    unregisterParticipant(name) {
        let currentParticipant = this.listOfParticipants.find(participant => participant.name == name);
        if (currentParticipant == undefined){
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        let indexOfCurrentParticipant = this.listOfParticipants.indexOf(currentParticipant)
        this.listOfParticipants.splice(indexOfCurrentParticipant, 1)
        return `The ${name} removed successfully.`

    };
    timeToPlay(typeOfGame, participant1, participant2) {
        // Problem with the  count of participants
        let firstParticipant = this.listOfParticipants.find(participant => participant.name == participant1);
        let secondParticipant = this.listOfParticipants.find(participant => participant.name == participant2);
        if (typeOfGame == 'WaterBalloonFights' && ( firstParticipant == undefined || secondParticipant == undefined)){
            throw new Error(`Invalid entered name/s.`)
        };
        if (typeOfGame == 'Battleship' && firstParticipant == undefined){
            throw new Error(`Invalid entered name/s.`)
        };
        if (typeOfGame == 'WaterBalloonFights' && (firstParticipant.condition != secondParticipant.condition)){
            throw new Error(`Choose players with equal condition.`)
        };
        if (typeOfGame == 'Battleship'){
            firstParticipant.power += 20;
            return `The ${firstParticipant.name} successfully completed the game ${typeOfGame}.`
        };
        if (typeOfGame == 'WaterBalloonFights'){
            if (firstParticipant.power > secondParticipant.power){
                firstParticipant.wins ++;
                return `The ${firstParticipant.name} is winner in the game ${typeOfGame}.`
            }else if (secondParticipant.power > firstParticipant.power){
                secondParticipant.wins ++;
                return  `The ${secondParticipant.name} is winner in the game ${typeOfGame}.`
            }
            return `There is no winner.`
        }
    };
    toString() {
        let numberOfParticipants = this.listOfParticipants.length
        let result = [`${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}`]
        if (numberOfParticipants > 0){
            let sortedParticipantsByWins = this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(participant => result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`))
        }
        return result.join('\n')
    };
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

