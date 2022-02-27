const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(obj) {
        super(obj);

        this.school = obj.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        this.employeeType = 'Intern';
        return this.employeeType;
    }
}

module.exports = Intern;