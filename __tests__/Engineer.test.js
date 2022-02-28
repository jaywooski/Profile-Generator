const Engineer = require("../lib/Engineer");



test('create new Engineer object', () => {
    var obj = {
        employeeName: 'greg',
        id: '',
        employeeEmail: 'greg@yes/net',
        employeeType: 'engineer',
        github: 'lernantino'
    };

    const engineer = new Engineer(obj);


    expect(engineer).toEqual(
        {
            name: expect.any(String), 
            id:'', 
            email: expect.any(String), 
            employeeType: expect.any(String), 
            github: expect.any(String)
        }
    );
})

test("gets engineer's Github", () => {
    var obj = {
        employeeName: 'greg',
        id: '',
        employeeEmail: 'greg@yes/net',
        employeeType: 'engineer',
        github: 'lernantino'
    };
    const engineer = new Engineer(obj);

    expect(engineer.getGithub()).toEqual('lernantino');
})

test('gets engineer role', () => {
    var obj = {
        employeeName: 'greg',
        id: '',
        employeeEmail: 'greg@yes/net',
        employeeType: 'engineer',
        github: 'lernantino'
    };
    const engineer = new Engineer(obj);

    expect(engineer.getRole()).toEqual('engineer');
})

