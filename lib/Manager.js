const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor() {
        super();

        this.officeNumber = '';
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Engineer;