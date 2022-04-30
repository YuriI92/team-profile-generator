// generates main template for html file
const generateTemplate = data => {
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

            ${generateContent(data)}

        </section>
    </main>
</body>
</html>
    `;
}

// generates all team member's cards
const generateContent = data => {
    // set an empty variable to store html template
    let html = '';

    // add manager info card into the variable
    html += `
            <article class="card border-0 shadow my-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">${data.manager[0].getName()}</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-briefcase"></i> ${data.manager[0].getRole()}</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: ${data.manager[0].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.manager[0].getEmail()}">${data.manager[0].getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${data.manager[0].officeNumber}</li>
                    </ul>
                </div>
            </article>`

    // add engineer info card into the variable
    for (let i = 0; i < data.engineer.length; i++) {
        html += `
            <article class="card border-0 shadow my-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">${data.engineer[i].getName()}</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-laptop"></i> ${data.engineer[i].getRole()}</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: ${data.engineer[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.engineer[i].getEmail()}">${data.engineer[i].getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${data.engineer[i].getGithub()}" target="_blank" rel="noopener">${data.engineer[i].getGithub()}</a></li>
                    </ul>
                </div>
            </article>`;
    }

    // add intern info card into the variable
    for (let i = 0; i < data.intern.length; i++) {
        html += `
            <article class="card border-0 shadow my-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">${data.intern[i].getName()}</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-graduation-cap"></i> ${data.intern[i].getRole()}</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: ${data.intern[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.intern[i].getEmail()}">${data.intern[i].getEmail()}</a></li>
                        <li class="list-group-item">School: ${data.intern[i].getSchool()}</li>
                    </ul>
                </div>
            </article>`;
    }

    // return the html containing all the member's info cards
    return html;
}

module.exports = generateTemplate;
