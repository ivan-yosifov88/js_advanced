class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let bibiPerson = new Person('Bibi', 'Yosifova', '35', 'bibi_asenova@abv.bg')

console.log(bibiPerson.toString())