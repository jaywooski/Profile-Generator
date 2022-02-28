class Employee {
    constructor(obj) {

        this.name = obj.employeeName;
        this.id = '';
        this.email = obj.employeeEmail;
        this.employeeType = obj.employeeType;
        
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