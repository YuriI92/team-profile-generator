const Employee = require('../lib/Employee');

test('creates a Employee object', () => {
    const employee = new Employee('John', '3', 'john@example.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('3');
    expect(employee.email).toBe('john@example.com');
});

test("gets employee's name", () => {
    const employee = new Employee('John', '3', 'john@example.com');

    expect(employee.getName()).toBe('John');
});

test("gets employee's ID", () => {
    const employee = new Employee('John', '3', 'john@example.com');

    expect(employee.getId()).toBe('3');
});

test("gets employee's email address", () => {
    const employee = new Employee('John', '3', 'john@example.com');

    expect(employee.getEmail()).toBe('john@example.com');
});

test("gets employee's role", () => {
    const employee = new Employee('John', '3', 'john@example.com');

    expect(employee.getRole()).toBe('Employee');
});
