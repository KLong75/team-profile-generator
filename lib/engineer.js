const Employee = require('../lib/employee');

class Engineer extends Employee {
  constructor(name = '', github = '') {
    super(name);
    this.github = github;
  }

  getRole() {
    return `Engineer`;
  }
}; 
console.log();
module.exports = Engineer;