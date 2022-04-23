const inquirer = require('inquirer');

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
}

const nextOption = data => {
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
    .then((answer) => {
        if (answer.nextOption === 'Add an engineer') {
            engineerInfo(data);
        } else if (answer.nextOption === 'Add an intern') {
            internInfo(data);
        } else if (answer.nextOption === 'Finish building your team') {
            console.log(data);
        }
    })
}

const engineerInfo = teamInfo => {
    if (!teamInfo.engineer) {
        teamInfo.engineer = [];
    }

    let tempArr = [];

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
    .then(data => {
        tempArr.push(data);
        teamInfo.engineer.push(tempArr);
        console.log(teamInfo.engineer[0]);
        nextOption(teamInfo);
    });
}

const internInfo = teamInfo => {
    if (!teamInfo.intern) {
        teamInfo.intern = [];
    }

    let tempArr = [];

    console.log(`
======================
Engineer's Information
======================
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
    .then(data => {
        tempArr.push(data);
        teamInfo.intern.push(tempArr);
        console.log(teamInfo.intern[0]);
        nextOption(teamInfo);
    });
}

managerInfo()
    .then(nextOption)
    .catch((error) => {
        if (error.isTtyError) {
          console.log(error);
        } else {
          console.log(error);
        }
    });
