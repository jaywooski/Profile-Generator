const Intern = require("../lib/Intern");

test('create new Intern object', () => {
    const intern = new Intern();

    expect(intern).toEqual({name:"", id:"", email:"", employeeType:"", school:""});
})

test("gets intern's School", () => {
    const intern = new Intern();

    expect(intern.getSchool()).toEqual(intern.school);
})

test('gets intern role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual('Intern');
})
