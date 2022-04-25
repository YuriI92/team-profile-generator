const generateTemplate = data => {
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
            <article>
                <div>
                    <h2>${data.name}</h2>
                    <p></p>
                </div>
                <div>
                    <p>
                </div>
            </article>
        </main>
    </body>
    </html>
    `
}

module.exports = generateTemplate;