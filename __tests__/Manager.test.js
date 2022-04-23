const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager('Jared', '1', 'jared@example.com', '2');

    expect(manager.name).toBe('Jared');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jared@example.com');
    expect(manager.officeNumber).toBe('2');
});

test('gets role of the manager', () => {
    const manager = new Manager('Jared', '1', 'jared@example.com', '2');

    expect(manager.getRole()).toBe('Manager');
});
