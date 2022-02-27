const Employee = require("../lib/Employee");

test('create new Employee object', () => {
    const employee = new Employee();

    expect(employee).toEqual({name:"", id:"", email:"", type:""});
})

test('gets employee name value', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(employee.name);
})

test('gets employee ID number', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(employee.id);
})

test('gets employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(employee.email);
})

test('gets employee Role', () => {
    const employee = new Employee();
    
    expect(employee.getRole()).toEqual(employee.employeeType);
});