const Employee = require('../lib/Employee.js');



test('employee name is recognized', () => {
    const employee = new Employee('Will');
  
    expect(employee.name).toBe('Will');
  });
  
  test('Id is returned', () => {
    const employee = new Employee('Will', 1);

    expect(employee.id).toBe(1);
  });

  test('name, id, and email is returned', () => {
    const employee = new Employee('Will', 1, 'wberry86@gmail.com');

    expect(employee.name).toBe('Will');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('wberry86@gmail.com');
  });


  

/*

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`   // Returns 'Employee'

The other three classes will extend `Employee`.

*/