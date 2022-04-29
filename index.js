const inquirer = require('inquirer');

const teamInfo = {
    manager: [],
    engineer: [],
    intern: []
};

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTemplate = require('./src/generateTemplate');
const writeToFile = require('./src/generateFile')

const managerInfo = () => {
    console.log(`
=====================
Manager's Information
=====================
    `);
        
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your team manager's office number?"
        }
    ])
    .then(({ name, id, email, officeNumber }) => {
        teamInfo.manager.push(new Manager(name, id, email, officeNumber));
    });
}

const nextOption = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextOption',
            message: 'Please select an option from the following menu.',
            choices: [
                'Add an engineer',
                'Add an intern',
                'Finish building your team'
            ]
        }
    ])
    .then(({ nextOption }) => {
        if (nextOption === 'Add an engineer') {
            engineerInfo();
        } else if (nextOption === 'Add an intern') {
            internInfo();
        } else if (nextOption === 'Finish building your team') {
            writeToFile(generateTemplate(teamInfo));
        }
    })
}

const engineerInfo = () => {
    console.log(`
======================
Engineer's Information
======================
    `);
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(({ name, id, email, github }) => {
        teamInfo.engineer.push(new Engineer(name, id, email, github));
        nextOption();
    });
}

const internInfo = () => {
    console.log(`
====================
Intern's Information
====================
    `);
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ])
    .then(({ name, id, email, school }) => {
        teamInfo.intern.push(new Intern(name, id, email, school));
        nextOption();
    });
}

managerInfo()
    .then(nextOption)
    .catch(err => {
        console.log(err);
    });