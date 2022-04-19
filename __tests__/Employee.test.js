const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Phil', 1, 'email@address.com', 'role');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));

  });
