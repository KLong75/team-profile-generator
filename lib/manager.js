const Employee = require('../lib/employee');

class Manager extends Employee {
  constructor(name = '') {
    super(name);
    this.office = Math.floor(Math.random() * 100);
  }

  getRole() {
    return `manager`;
  }
}; 
console.log(Manager);
module.exports = Manager;