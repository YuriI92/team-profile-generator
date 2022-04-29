const fs = require('fs');

const writeToFile = content => {
    if (!fs.existsSync('./dist')) {
        fs.mkdirSync('./dist');
    }

    fs.writeFile('./dist/index.html', content, err => {
        if (err) {
            console.log(err);
        }

        console.log('HTML file created!');
    });
}

module.exports = writeToFile;
