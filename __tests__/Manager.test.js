const Manager = require("../lib/Manager");

var obj =  {
    name: 'Jay',
    id: '',
    email: 'john@edc.net',
    employeeType: 'manager',
    officeNumber: '876'
  }

test('create new Manager object', (obj) => {
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

test("gets Manager's office number", (obj) => {
    const manager = new Manager(obj);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
})

test('gets manager role', (obj) => {
    const manager = new Manager(obj);

    expect(manager.getRole()).toEqual('manager');
})