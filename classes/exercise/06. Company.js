class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        // if (this._isNotValid(name) || this._isNotValid(salary) || this._isNotValid(position) || this._isNotValid(this.departments) || salary < 0){
        if (!name || !salary || !position || !department || salary < 0) {
            // if (name == '' || salary == '' || position == '' || department == '' || salary < 0) {
            throw new Error("Invalid input!");
        };
        if (this.departments[department] == undefined) {
            this.departments[department] = []
        }
        this.departments[department].push({ name, salary, position })
        return `New employee is hired. Name: ${name}. Position: ${position}`
    };
    bestDepartment() {
        let highestAverageSalaryDepartment = {
            departmentName: '',
            departmentAverageSalary: 0
        };
        for (let department in this.departments) {
            let averageSalary = this.departments[department].reduce((acc, val) => {
                acc += (val.salary / this.departments[department].length)
                return acc
            }, 0)
            if (highestAverageSalaryDepartment.departmentAverageSalary <= averageSalary) {
                highestAverageSalaryDepartment.departmentName = department
                highestAverageSalaryDepartment.departmentAverageSalary = averageSalary
            }
        }
        let bestDepartment = highestAverageSalaryDepartment.departmentName
        let bestAverageSalary = highestAverageSalaryDepartment.departmentAverageSalary.toFixed(2)
        let sortedEmployees = this.departments[bestDepartment].sort((a, b) => {
            // return b.salary - a.salary || a.name.localeCompare(b.name);})
            if (a.salary < b.salary) {
                return 1
            }
            if (a.salary > b.salary) {
                return -1
            }
            if (a.salary == b.salary) {
                return a.name.localeCompare(b.name)
            }
        })
        let bestDepartmentEmployeesInfo = []
        sortedEmployees.forEach(record => bestDepartmentEmployeesInfo.push(`${record.name} ${record.salary} ${record.position}`))
        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary}\n${bestDepartmentEmployeesInfo.join('\n')}`
    }
     _isNotValid(parameter){
        return parameter === '' || parameter === undefined || parameter === null
    }
}




let c = new Company();
c.addEmployee("Atanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

console.log("sdf" == 'sdf')