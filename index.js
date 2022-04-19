const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateProfile = require('./src/page-template');

const employeeArray = []

const createManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'manager',
        message: 'Enter manager name (Required)',
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log('Please enter a valid manager name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID number(Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter a valid employee ID number');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: 'Enter your office number (Required)',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Enter a valid office number');
            return false;
          }
        }
      },
      
    ]).then ((answers) => {
        const newManager = new Manager(answers.manager, answers.id, answers.email, answers.office)
        console.log(newManager);
        employeeArray.push(newManager);
        selectEmployee()
    })
  };

function selectEmployee() {
      inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Select from the following:',
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finished entering team members. Generate team profile."],
      }).then((answer) => {
        if (answer.options === "Add an engineer") {
          createEngineer()
        } else if (answer.options === "Add an intern") {
          createIntern()
        } else {
          writeProfile()
        }  

      })
  }

  const createEngineer = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineer',
        message: 'Enter engineer name (Required)',
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log('Please enter a valid engineer name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID number(Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter a valid employee ID number');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter engineer GitHUb username (Required)',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Enter a valid GitHUb username');
            return false;
          }
        }
      },
      
    ]).then ((answers) => {
        const newEngineer = new Engineer(answers.engineer, answers.id, answers.email, answers.github)
        console.log(newEngineer)
        employeeArray.push(newEngineer);
        selectEmployee()
    })
  };

  const createIntern = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'intern',
        message: 'Enter intern name (Required)',
        validate: internNameInput => {
          if (internNameInput) {
            return true;
          } else {
            console.log('Please enter a valid intern name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your employee ID number(Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter a valid employee ID number');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'Enter name of intern school (Required)',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log('Enter a valid school name');
            return false;
          }
        }
      },
      
    ]).then ((answers) => {
        const newIntern = new Intern(answers.intern, answers.id, answers.email, answers.school)
        console.log(newIntern)
        employeeArray.push(newIntern);
        selectEmployee()
    })
  };

  const writeProfile = () => {

        // generate the HTML using your template
        const output = generateProfile(employeeArray)

        // using the generated HTML, write to a file using fs
        fs.writeFile('./dist/index.html', output, () => {
            console.log('Any message')

        })

  }


  createManager()
