const inquirer = require('inquirer');

const init = function() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter the employee name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Enter in the employee name!")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter the employee email: ',
            validate: function(employeeEmail) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        }
    ])
}

const managerPrompt = function() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'phoneNumber',
            message: `What is the manager's office number?`,
            validate: phoneNumber => {
                
            }
        },
    ])
}

init()
    .then(employeeData => {
        console.log(data)
    })