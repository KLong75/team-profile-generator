const Employee = require('../lib/employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office
  }

  getRole() {
    return `manager`;
  }
}; 
console.log(Manager);
module.exports = Manager;