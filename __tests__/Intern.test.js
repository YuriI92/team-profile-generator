const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('John', '5', 'john@example.com', 'University of Toronto');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('5');
    expect(intern.email).toBe('john@example.com');
    expect(intern.school).toBe('University of Toronto');
});

test("gets intern's school", () => {
    const intern = new Intern('John', '5', 'john@example.com', 'University of Toronto');

    expect(intern.getSchool()).toBe('University of Toronto');
});

test('get role of the intern', () => {
    const intern = new Intern('John', '5', 'john@example.com', 'University of Toronto');

    expect(intern.getRole()).toBe('Intern');
});
