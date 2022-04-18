const Employee = require('../lib/employee');

class Intern extends Employee {
  constructor(name = '', school = '') {
    super(name);
    this.school = school;
  }

  getSchool() {
    return `${this.school}`;
  };  

  getRole() {
    return `Intern`;
  };
}; 
console.log();
module.exports = Intern;