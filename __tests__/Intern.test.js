const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('');
  
    expect(intern.school).toEqual(expect.any(String));
   
  });