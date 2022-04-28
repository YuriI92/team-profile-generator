const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function teamInfo() {
    this.manager;
    this.engineer = [];
    this.intern = [];
}

teamInfo.prototype.initTeam = function() {
    console.log(`
=====================
Manager's Information
=====================
    `);
        
    inquirer.prompt([
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
        this.manager = new Manager(name, id, email, officeNumber);

        this.nextOption();
    });
}

teamInfo.prototype.nextOption = function() {
    inquirer.prompt([
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
            this.engineerInfo();
        } else if (nextOption === 'Add an intern') {
            this.internInfo();
        } else if (nextOption === 'Finish building your team') {
            writeToFile(this.generateTemplate());
        }
    })
}

teamInfo.prototype.engineerInfo = function() {
    console.log(`
======================
Engineer's Information
======================
    `);
    
    inquirer.prompt([
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
        this.engineer.push(new Engineer(name, id, email, github));
        this.nextOption();
    });
}

teamInfo.prototype.internInfo = function() {
    console.log(`
====================
Intern's Information
====================
    `);
    
    inquirer.prompt([
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
        this.intern.push(new Intern(name, id, email, school));
        this.nextOption();
    });
}

const mockData = {
    engineer: [
        {
            name: 'Alec',
            id: '2',
            email: 'alec@fakemail.com',
            github: 'ibalec'
        },
        {
            name: 'Grace',
            id: '3',
            email: 'grace@fakemail.com',
            github: 'gchoi2u'
        },
        {
            name: 'Tammer',
            id: '4',
            email: 'tammer@fakemail.com',
            github: 'tammerg'
        }
    ],
    intern: {
        name: 'John',
        id: '5',
        email: 'john@fakemail.com',
        school: '2University'
    },
    manager: {
        name: 'Jared',
        id: '1',
        email: 'jared@fakemail.com',
        officeNumber: '1',    
    }
}

const writeToFile = content => {
    fs.writeFile('./dist/index.html', content, err => {
        if (err) {
            console.log(err);
        }

        console.log('HTML file created!');
    });
}

teamInfo.prototype.generateTemplate = function() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Info</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
        ${this.generateContent()}
    </main>
</body>
</html>
    `;
}

let html = '';

teamInfo.prototype.generateContent = function() {
    html += `
        <article>
            <div>
                <h2>${this.manager.getName()}</h2>
                <p>${this.manager.getRole()}</p>
            </div>
            <div>
                <p>ID: ${this.manager.getId()}</p>
                <p>Email: ${this.manager.getEmail()}</p>
                <p>Office number: ${this.manager.officeNumber}</p>
            </div>
        </article>
        `

    for (let i = 0; i < this.engineer.length; i++) {
        html += `
        <article>
            <div>
                <h2>${this.engineer[i].getName()}</h2>
                <p>${this.engineer[i].getRole()}</p>
            </div>
            <div>
                <p>ID: ${this.engineer[i].getId()}</p>
                <p>Email: ${this.engineer[i].getEmail()}</p>
                <p>GitHub: ${this.engineer[i].getGithub()}</p>
            </div>
        </article>
        `;
    }

    for (let i = 0; i < this.intern.length; i++) {
        html += `
        <article>
            <div>
                <h2>${this.intern[i].getName()}</h2>
                <p>${this.intern[i].getRole()}</p>
            </div>
            <div>
                <p>ID: ${this.intern[i].getId()}</p>
                <p>Email: ${this.intern[i].getEmail()}</p>
                <p>School: ${this.intern[i].getSchool()}</p>
            </div>
        </article>
        `;
    }

    return html;
}

new teamInfo().initTeam();