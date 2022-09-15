//Intern class object creation test
const Intern = require('../lib/Intern');
 
test('creating an Intern object', () => {
    const intern = new Intern('Tyler', 101, 'tylerhudson96@gmail.com', 'UofSC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('get school', () => {
    const intern = new Intern('Tyler', 101, 'tylerhudson96@gmail.com', 'UofSC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role', () => {
    const intern = new Intern('Tyler', 101, 'tylerhudson96@gmail.com', 'UofSC');

    expect(intern.getRole()).toEqual("Intern");
});