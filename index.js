const inquirer = require('inquirer');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generatePage = require('./src/page-template');

const enterManager = () => {
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
      {
        type: 'list',
        name: 'options',
        message: 'Select from the following:',
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finished entering team members. Generate team profile."],
      }
    ]);
  };

  enterManager();