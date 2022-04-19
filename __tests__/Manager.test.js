const Manager = require('../lib/manager');

test('creates a manager object', () => {
    const manager = new Manager('name', 2, 'email', 22, 'role');
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));
  });