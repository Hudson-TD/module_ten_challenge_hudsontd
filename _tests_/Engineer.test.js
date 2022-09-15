//Engineer class object creation test
const Engineer = require('../lib/Engineer');

test('creating an Engineer object', () => {
    const engineer = new Engineer('Tyler', 101, 'tylerhudson96@gmail.com', 'Hudson-TD');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('get github username', () => {
    const engineer = new Engineer('Tyler', 101, 'tylerhudson96@gmail.com', 'Hudson-TD');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role', () => {
    const engineer = new Engineer('Tyler', 101, 'tylerhudson96@gmail.com', 'Hudson-TD');

    expect(engineer.getRole()).toEqual("Engineer");
});