
//  Functional solution

// function createPerson(firstName, lastName){
//     const resultObject = {
//         firstName,
//         lastName
//     }
   

//     Object.defineProperty(resultObject, 'fullName',{
//         get: function(){
//             return `${firstName} ${lastName}`
//         },
//         set: function(value){
//             let [first, last] = value.split(' ');
//             if (first != undefined && last != undefined){
//                 this.firstName = first;
//                 this.lastName = last
//             }
//         },
//         configurable: true,
//         enumerable: true
//     });
//     return resultObject 
// }


// let person1 = createPerson("Peter", "Ivanov");
// console.log(person1.fullName); //Peter Ivanov
// person1.firstName = "George";
// console.log(person1.fullName); //George Ivanov
// person1lastName = "Peterson";
// console.log(person1.fullName); //George Peterson
// person1.fullName = "Nikola Tesla";
// console.log(person1.firstName); //Nikola
// console.log(person1.lastName); //Tesla

// console.log('_-_-_-_-_-_-_-_-_-_-_')

// let person2 = createPerson("Albert", "Simpson");
// console.log(person2.fullName); //Albert Simpson
// person2.firstName = "Simon";
// console.log(person2.fullName); //Simon Simpson
// person2.fullName = "Peter";
// console.log(person2.firstName);  // Simon
// console.log(person2.lastName);  // Simpson


//Class solution 

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value){
        let [first, last] = value.split(' ');
        if (first != undefined && last != undefined){
            this.firstName = first;
            this.lastName = last;
        }
    }
}


let firstPerson = new Person("Peter", "Ivanov");
console.log(firstPerson.fullName); //Peter Ivanov
firstPerson.firstName = "George";
console.log(firstPerson.fullName); //George Ivanov
firstPerson.lastName = "Peterson";
console.log(firstPerson.fullName); //George Peterson
firstPerson.fullName = "Nikola Tesla";
console.log(firstPerson.firstName); //Nikola
console.log(firstPerson.lastName); //Tesla

console.log('_-_-_-_-_-_-_-_-_-_-_' + '\n')

let secondPerson = new Person("Albert", "Simpson");
console.log(secondPerson.fullName); //Albert Simpson
secondPerson.firstName = "Simon";
console.log(secondPerson.fullName); //Simon Simpson
secondPerson.fullName = "Peter";
console.log(secondPerson.firstName);  // Simon
console.log(secondPerson.lastName);  // Simpson
