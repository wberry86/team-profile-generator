const Manager = require('../lib/Manager.js');

test('engineer name is recognized', () => {
    const manager = new Manager('name');
  
    expect(manager.name).toBe('name');
  });
  
  test('Id is returned', () => {
    const manager = new Manager('Will', 1);

    expect(manager.id).toBe(1);
  });

  test('email is returned', () => {
    const manager = new Manager('Will', 1, 'wberry86@gmail.com');

    expect(manager.email).toBe('wberry86@gmail.com');
  });

/*

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

* `officeNumber`

* `getRole()`   // Overridden to return 'Manager'

*/