const Employee = require("../lib/Employee");
const list = require('../lib/__mocks__/Employee')

// jest.mock('Employee');
var obj = {
        name: 'Jay',
        id: '',
        email: 'john@edc.net',
        employeeType: 'employee',
    };

test('create new Employee object', (obj) => {
    const employee = new Employee(obj);
    
    
    expect(employee).toEqual(
        {
            name: expect.any(String), 
            id:'', 
            email: expect.any(String), 
            employeeType: expect.any(String)
        }
    );
})

test('gets employee name value', () => {
    const employee = new Employee(obj);

    expect(employee.getName()).toEqual(employee.employeeName);
})

test('gets employee ID number', () => {
    const employee = new Employee(obj);

    expect(employee.getId()).toBe('');
})

test('gets employee email', () => {
    const employee = new Employee(obj);

    expect(employee.getEmail()).toEqual(employee.employeeEmail);
})

test('gets employee Role', () => {
    const employee = new Employee(obj);

    expect(employee.getRole()).toEqual(employee.employeeType);
});