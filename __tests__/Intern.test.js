const Intern = require("../lib/Intern");

test('create new Intern object', () => {
    var obj = {
        employeeName: 'Joe',
        id: '',
        employeeEmail: 'joe@aol.com',
        employeeType: 'intern',
        school: 'MIT'
    }
    const intern = new Intern(obj);

    expect(intern).toEqual(
        {
            name: expect.any(String), 
            id:'', 
            email: expect.any(String), 
            employeeType: expect.any(String),
            school: expect.any(String)
        }
    );
})

test("gets intern's School", () => {
    var obj = {
        employeeName: 'Joe',
        id: '',
        employeeEmail: 'joe@aol.com',
        employeeType: 'intern',
        school: 'MIT'
    }
    const intern = new Intern(obj);

    expect(intern.getSchool()).toEqual('MIT');
})

test('gets intern role', () => {
    var obj = {
        employeeName: 'Joe',
        id: '',
        employeeEmail: 'joe@aol.com',
        employeeType: 'intern',
        school: 'MIT'
    }
    const intern = new Intern(obj);

    expect(intern.getRole()).toEqual('intern');
})
