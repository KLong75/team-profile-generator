const Engineer = require('../lib/engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('name', 1, 'role', 'email', 'github');
  
    expect(engineer.name).toEqual(expect.any(String)); 
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });