const Manager = require("../lib/Manager");

test('create new Manager object', () => {
    const manager = new Manager();

    expect(manager).toEqual({name:"", id:"", email:"", employeeType:"", officeNumber:""});
})

test("gets Manager's office number", () => {
    const manager = new Manager();

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
})

test('gets manager role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual('Manager');
})