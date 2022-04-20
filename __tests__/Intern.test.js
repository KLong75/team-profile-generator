const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('name', 5, 'role', 'email', 'school');

    expect(intern.name).toEqual(expect.any(String)); 
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });