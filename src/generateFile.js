const fs = require('fs');

// writes generated html template into index.html file in dist folder
const writeToFile = content => {
    // make sure that the dist folder exists, if not, create one
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
