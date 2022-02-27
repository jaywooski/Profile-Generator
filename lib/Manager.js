const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(obj) {
        super(obj);

        this.officeNumber = obj.phoneNumber;
        // if (phoneNumberLength < 4) return phoneNumber;
        // (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        this.employeeType = 'Manager';
        return this.employeeType;
    }

}

module.exports = Manager;