const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Tyler', 101, 'tylerhudson96@gmail.com', 'Hudson-TD');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Tyler', 101, 'tylerhudson96@gmail.com', 'Hudson-TD');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Tyler', 101, 'tylerhudson96@gmail.com', 'Hudson-TD');

    expect(engineer.getRole()).toEqual("Engineer");
});