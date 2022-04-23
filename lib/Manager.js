const Employee = require('./Employee');

class Manager extends Employee {
    // Parameter's default value will be empty string
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
