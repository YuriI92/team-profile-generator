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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
        <script src="https://kit.fontawesome.com/1822302283.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./dist/style.css" />
    <title>My Team Info</title>
</head>
<body>
    <header>
        <div class="d-flex justify-content-center align-items-center bg-danger">
            <h1 class="py-4 py-md-5 text-white">My Team</h1>
        </div>
    </header>

    <main class="row justify-content-center">
        <section class="col-12 col-lg-11 d-flex justify-content-around flex-wrap my-2 my-md-5">
            ${this.generateContent()}
        </section>
    </main>
</body>
</html>
    `;
}

let html = '';

teamInfo.prototype.generateContent = function() {
    html += `
            <article class="card border-0 shadow my-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">${this.manager.getName()}</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-briefcase"></i> ${this.manager.getRole()}</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: ${this.manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.manager.getEmail()}">${this.manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${this.manager.officeNumber}</li>
                    </ul>
                </div>
            </article>`

    for (let i = 0; i < this.engineer.length; i++) {
        html += `
            <article class="card border-0 shadow my-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">${this.engineer[i].getName()}</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-laptop"></i> ${this.engineer[i].getRole()}</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: ${this.engineer[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.engineer[i].getEmail()}">${this.engineer[i].getEmail()}</a></li>
                        <li class="list-group-item">GitHub: ${this.engineer[i].getGithub()}</li>
                    </ul>
                </div>
            </article>`;
    }

    for (let i = 0; i < this.intern.length; i++) {
        html += `
            <article class="card border-0 shadow my-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">${this.intern[i].getName()}</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-graduation-cap"></i> ${this.intern[i].getRole()}</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: ${this.intern[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${this.intern[i].getEmail()}">${this.intern[i].getEmail()}</a></li>
                        <li class="list-group-item">School: ${this.intern[i].getSchool()}</li>
                    </ul>
                </div>
            </article>
        `;
    }

    return html;
}

new teamInfo().initTeam();