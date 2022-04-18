const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateProfile = require('./src/page-template');

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
      
    ]);
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
      
    ]).then (() => {
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
      
    ]).then (() => {
        selectEmployee()
    })
  };

  const writeProfile = () => {
      console.log('Any message')
  }


  createManager().then(selectEmployee)
