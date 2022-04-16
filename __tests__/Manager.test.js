const Manager = require('../lib/manager');

test('creates a manager object', () => {
    const manager = new Manager('');
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
  });