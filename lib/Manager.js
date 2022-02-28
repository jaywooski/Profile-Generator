const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(obj) {
        super(obj);

        this.officeNumber = obj.phoneNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        this.employeeType = 'manager';
        return this.employeeType;
    }

}

module.exports = Manager;