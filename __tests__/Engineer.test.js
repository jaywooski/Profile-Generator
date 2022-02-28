const Engineer = require("../lib/Engineer");

var obj = {
    name: 'greg',
    id: '',
    email: 'greg@yes/net',
    employeeType: 'engineer',
    github: 'lernantino'
  };

test('create new Engineer object', (obj) => {
    const engineer = new Engineer(obj);

    expect(engineer).toEqual(
        {
            name:expect.any(String), 
            id:"", 
            email:expect.any(String), 
            employeeType:expect.toBe('engineer'), 
            github:expect.any(String)
        }
    );
})

test("gets engineer's Github", (obj) => {
    const engineer = new Engineer(obj);

    expect(engineer.getGithub()).toEqual(engineer.github);
})

test('gets engineer role', (obj) => {
    const engineer = new Engineer(obj);

    expect(engineer.getRole()).toEqual('engineer');
})

