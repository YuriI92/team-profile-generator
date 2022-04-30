const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Alec', '2', 'alec@example.com', 'alecRepo');

    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('alec@example.com');
    expect(engineer.github).toBe('alecRepo');
});

test("gets Engineer's github username", () => {
    const engineer = new Engineer('Alec', '2', 'alec@example.com', 'alecRepo');

    expect(engineer.getGithub()).toBe('alecRepo');
});

test('gets role of the engineer', () => {
    const engineer = new Engineer('Alec', '2', 'alec@example.com', 'alecRepo');

    expect(engineer.getRole()).toBe('Engineer');
})