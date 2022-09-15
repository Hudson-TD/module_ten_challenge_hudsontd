//Employee class object creation test
const Employee = require('../lib/Employee');

test('creating an Employee object', () => {
    const employee = new Employee('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
 
test('get name', () => {
    const employee = new Employee('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get ID', () => {
    const employee = new Employee('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get email', () => {
    const employee = new Employee('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get role', () => {
    const employee = new Employee('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});