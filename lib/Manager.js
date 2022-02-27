const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor() {
        super();

        this.officeNumber = '';
        // if (phoneNumberLength < 4) return phoneNumber;
        // (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;