const Intern = require("../lib/Intern");
var obj = {
    name: 'Joe',
    id: '',
    email: 'joe@aol.com',
    employeeType: 'intern',
    school: 'MIT'
  }
test('create new Intern object', (obj) => {
    const intern = new Intern(obj);

    expect(intern).toEqual(
        {
            name: expect.any(String), 
            id:'', 
            email: expect.any(String), 
            employeeType: expect(intern.employeeType).toBe('intern'),
            school: expect.any(String)
        }
    );
})

test("gets intern's School", (obj) => {
    const intern = new Intern(obj);

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets intern role', (obj) => {
    const intern = new Intern(obj);

    expect(intern.getRole()).toEqual('intern');
})
