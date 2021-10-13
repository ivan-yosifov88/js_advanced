function toStringExtension() {
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }
        toString(){
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`
        }
        
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email)
            this.course = course
        }
        toString(){
            return super.toString().slice(0, -1) + `, course: ${this.course})`
        }
        
    }

    return {
        Person,
        Teacher,
        Student
    }
}


let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let person = new Person('Adi', 'adi@adi.bg')
console.log(person.toString())
console.log(person.name)
let mathTeacher = new Teacher('Bibi', 'bibi_asenova@abv.bg', "Philosophy");
let softwareStudent = new Student('Ivan', 'ivan.yosifov88@gmail.com', 'JS Advanced')

console.log(mathTeacher.email)
console.log(mathTeacher.subject)
console.log(mathTeacher.name)
console.log(mathTeacher.toString())
console.log(softwareStudent.email)
console.log(softwareStudent.course)
console.log(softwareStudent.toString())

