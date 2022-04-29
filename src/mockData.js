const mockData = `
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
        <section class="col-12 col-lg-11 d-flex justify-content-center flex-wrap my-2 my-md-5">
            
            <article class="card border-0 shadow m-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">Jared</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-briefcase"></i> Manager</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: 1</li>
                        <li class="list-group-item">Email: <a href="mailto:jared@fakemail.com">jared@fakemail.com</a></li>
                        <li class="list-group-item">Office number: 1</li>
                    </ul>
                </div>
            </article>
            <article class="card border-0 shadow m-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">Alec</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-laptop"></i> Engineer</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: 2</li>
                        <li class="list-group-item">Email: <a href="mailto:alec@fakemail.com">alec@fakemail.com</a></li>
                        <li class="list-group-item">GitHub: ibalec</li>
                    </ul>
                </div>
            </article>
            <article class="card border-0 shadow m-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">Grace</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-laptop"></i> Engineer</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: 3</li>
                        <li class="list-group-item">Email: <a href="mailto:grace@fakemail.com">grace@fakemail.com</a></li>
                        <li class="list-group-item">GitHub: gchoi2u</li>
                    </ul>
                </div>
            </article>
            <article class="card border-0 shadow m-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">Tammer</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-laptop"></i> Engineer</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: 4</li>
                        <li class="list-group-item">Email: <a href="mailto:tammer@fakemail.com">tammer@fakemail.com</a></li>
                        <li class="list-group-item">GitHub: tammer</li>
                    </ul>
                </div>
            </article>
            <article class="card border-0 shadow m-3" style="width: 300px;">
                <div class="card-body bg-primary text-white p-3">
                    <h2 class="card-title">John</h2>
                    <h3 class="card-subtitle"><i class="fa-solid fa-graduation-cap"></i> Intern</h3>
                </div>
                <div class="list-group list-group-flush bg-light py-3">
                    <ul class="card-body mt-3">
                        <li class="list-group-item">ID: 5</li>
                        <li class="list-group-item">Email: <a href="mailto:john@fakemail.com">john@fakemail.com</a></li>
                        <li class="list-group-item">School: Toronto University</li>
                    </ul>
                </div>
            </article>
        
        </section>
    </main>
</body>
</html>
`

module.exports = mockData;
