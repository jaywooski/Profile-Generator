class Employee {
    constructor(
        // employeeName, employeeId, employeeEmail, employeeType
        ) {

        this.name = "";
        this.id = "";
        this.email = "";
        this.type = "";
        // employeeName;
        // employeeId;
        // employeeEmail;
        // employeeType;
    }

    getName() {
        return this.name;
    }
    
    getId() {

        return this.id
    }

    
    getEmail() {
        return this.email;
    }

    getRole() {
        return this.employeeType;
    }
}


module.exports = Employee