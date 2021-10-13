function createEmployees() {
    class Employee {
        constructor(name, age) {
            if (this.constructor == Employee){
                throw new Error('Cannot instantiate abstract class')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        };
        _calculateSalary(){
            return this.salary
        }
        work() {
            let currentTask = this.tasks.shift()
            console.log(currentTask)
            this.tasks.push(currentTask)
        };
        collectSalary() {
            console.log(`${this.name} received ${this._calculateSalary()} this month.`)
        };
    };
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [`${this.name} is working on a simple task.`]
        }
    };
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,
            ]
        }
    };
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`,
            ];
            this.dividend = 0
        };
        _calculateSalary(){
            return this.salary + this.dividend
        }
    };
    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }
}


const classes = createEmployees (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  

