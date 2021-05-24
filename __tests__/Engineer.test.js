const Engineer = require('../lib/Engineer.js');

test('engineer name is recognized', () => {
    const engineer = new Engineer('name');
  
    expect(engineer.name).toBe('name');
  });
  
  test('Id is returned', () => {
    const engineer = new Engineer('Will', 1);

    expect(engineer.id).toBe(1);
  });

  test('email is returned', () => {
    const engineer = new Engineer('Will', 1, 'wberry86@gmail.com');

    expect(engineer.email).toBe('wberry86@gmail.com');
  });


/*

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

* `github`  // GitHub username

* `getGithub()`

* `getRole()`   // Overridden to return 'Engineer'

*/