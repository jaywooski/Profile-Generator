const Employee = require("../lib/Employee");




test('create new Employee object', () => {
    var obj = {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'employee',
    };
    console.log(obj);
    const employee = new Employee(obj);
    console.log(employee);
    
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
    var obj = {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'employee',
    };
    const employee = new Employee(obj);

    expect(employee.getName()).toEqual('Jay');
})

test('gets employee ID number', () => {
    var obj = {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'employee',
    };
    const employee = new Employee(obj);

    expect(employee.getId()).toBe('');
})

test('gets employee email', () => {
    var obj = {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'employee',
    };
    const employee = new Employee(obj);

    expect(employee.getEmail()).toEqual('john@edc.net');
})

test('gets employee Role', () => {
    var obj = {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'employee',
    };
    const employee = new Employee(obj);

    expect(employee.getRole()).toEqual('employee');
});