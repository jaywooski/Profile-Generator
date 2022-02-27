const Engineer = require("../lib/Engineer");

test('create new Engineer object', () => {
    const engineer = new Engineer();

    expect(engineer).toEqual({name:"", id:"", email:"", employeeType:"", github:""});
})

test("gets engineer's Github", () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(engineer.github);
})

test('gets engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual('Engineer');
})

