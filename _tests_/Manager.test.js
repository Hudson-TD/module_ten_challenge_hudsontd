const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Tyler', 101, 'tylerhudson96@gmail.com', 17);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Tyler', 101, 'tylerhudson96@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});