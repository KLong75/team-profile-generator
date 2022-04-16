const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'role',
        message: 'What is your role? (Required)',
        validate: roleInput => {
          if (roleInput) {
            return true;
          } else {
            console.log('Please enter your role');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID number? (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your ID number');
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
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username');
            return false;
          }
        }
      },
    ]);
  };

  promptUser();