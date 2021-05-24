const Intern = require('../lib/Intern.js');

test('intern name is recognized', () => {
    const intern = new Intern('name');
  
    expect(intern.name).toBe('name');
  });
  
  test('Id is returned', () => {
    const intern = new Intern('Will', 1);

    expect(intern.id).toBe(1);
  });

  test('email is returned', () => {
    const intern = new Intern('Will', 1, 'wberry86@gmail.com');

    expect(intern.email).toBe('wberry86@gmail.com');
  });
  
/*

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

* `school`

* `getSchool()`

* `getRole()`   // Overridden to return 'Intern'

*/