const Manager = require("../lib/Manager");



test('create new Manager object', () => {
    var obj = {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'manager',
        phoneNumber: '876'
    }

    const manager = new Manager(obj);

    expect(manager).toEqual(
        {
        
            name: expect.any(String), 
            id:'', 
            email: expect.any(String), 
            employeeType: expect.any(String),
            officeNumber: expect.any(String)
        }
    );
})

test("gets Manager's office number", () => {
    var obj =  {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'manager',
        phoneNumber: '876'
    }
    const manager = new Manager(obj);

    expect(manager.getOfficeNumber()).toEqual('876');
})

test('gets manager role', () => {
    var obj =  {
        employeeName: 'Jay',
        id: '',
        employeeEmail: 'john@edc.net',
        employeeType: 'manager',
        phoneNumber: '876'
    }
    const manager = new Manager(obj);

    expect(manager.getRole()).toEqual('manager');
})