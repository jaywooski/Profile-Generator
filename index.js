const inquirer = require('inquirer');
const generatePage = require('./src/createEmployeePage');
const fs = require('fs');


const employees = [];

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('dist/index.html', data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true, 
                message: 'Your HTML file has been created :)'
            });
        });
    });
}

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
                if(employeeEmail) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(employeeEmail);
                }
                else {
                    console.log('Invalid format. Please enter in a valid email:');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please select the type/position of the employee:',
            choices: [
                "employee",
                "manager",
                "engineer",
                "intern"
            ]
        },
        {
            type: 'input',
            name: 'phoneNumber',
            message: `What is the manager's office number?`,
            validate: phoneNumber => {
                if(phoneNumber.length >= 3 || phoneNumber.length <= 10) {
                    return true;
                }
                else {
                    console.log("Please enter a valid phone number :");
                    return false;
                }    
            },
            when: (answers) => answers.employeeType === "manager"
        },
        {
            type: 'input',
            name: 'school',
            message: `Please input the name of the intern's school:`,
            validate: school => {
                if(school){
                    return true;
                }
                else {
                    console.log('Please enter a valid school name: ');
                    return false;
                }
            },
            when: (answers) => answers.employeeType === "intern"
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username:',
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log('Please enter in a valid username:');
                    return false;
                }
            },
            when: (answers) => answers.employeeType === "engineer"

        }
    ])
}

const runProgram = function() {
    
    init()
        .then(employeeData => {
            var employee = new Employee();
            employee = employeeData;
            employees.push(employee);
            console.log(employees);

            

            return inquirer.prompt(
                {
                    type: 'confirm',
                    name: 'confirmNewEmployee',
                    message: 'Would you like to add another employee?'
                }
            )
        })
        .then(employeeConfirm => {    
            if(employeeConfirm.confirmNewEmployee){
                runProgram();
            }
        //     console.log(employees);
        //     
        //     new addition below
        //     employees.forEach(employee => { })
        // 
        //     return generatePage(employees);
        })
        .catch(err => {
            console.log(err);
        })
}

runProgram();
// const employees_new = [
//     {
//       employeeName: 'John',
//       employeeEmail: 'jay@dem.com',
//       employeeType: 'employee'
//     },
//     {
//       employeeName: 'Johnny',
//       employeeEmail: 'jaywooski@google.co',
//       employeeType: 'engineer',
//       github: 'jaywooski'
//     }
//   ];
