const inquirer = require('inquirer');

// create an array to store all the team member information
const teamInfo = {
    manager: [],
    engineer: [],
    intern: []
};

// call each role class to create each member's info object
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// call src files
const generateTemplate = require('./src/generateTemplate');
const writeToFile = require('./src/generateFile')

// get manager's information from user prompt
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
        // create Manager object and push it into the teamInfo array
        teamInfo.manager.push(new Manager(name, id, email, officeNumber));
    });
}

// prompt user for next action (add engineer / add intern / finish prompt)
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
        // if 'Add engineer' is chosen, call engineerInfo function
        // if 'Add intern' is chosen, call internInfo function
        // if 'Finish prompt' is chosen, finish user prompt and start generating html file
        if (nextOption === 'Add an engineer') {
            engineerInfo();
        } else if (nextOption === 'Add an intern') {
            internInfo();
        } else if (nextOption === 'Finish building your team') {
            writeToFile(generateTemplate(teamInfo));
        }
    })
}

// prompt user for engineer's info
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
        // create Engineer object and push it into the teamInfo array, then, go back to the nextOption menu
        teamInfo.engineer.push(new Engineer(name, id, email, github));
        nextOption();
    });
}

// prompt user for intern info
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
        // create Intern object and push it into the teamInfo array, then, go back to the nextOption menu
        teamInfo.intern.push(new Intern(name, id, email, school));
        nextOption();
    });
}

// initial function call (call managerInfo -> nextOption -> catch all the error if any)
managerInfo()
    .then(nextOption)
    .catch(err => {
        console.log(err);
    });