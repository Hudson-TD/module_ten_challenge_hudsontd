//Manager class object creation test
const Manager = require('../lib/Manager');
 
test('creating a Manager object', () => {
    const manager = new Manager('Tyler', 101, 'tylerhudson96@gmail.com', 17);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role', () => {
    const manager = new Manager('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});