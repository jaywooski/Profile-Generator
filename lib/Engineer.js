const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(obj) {
        super(obj);

        this.github = obj.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        this.employeeType = 'engineer';
        return this.employeeType;
    }
}

module.exports = Engineer;