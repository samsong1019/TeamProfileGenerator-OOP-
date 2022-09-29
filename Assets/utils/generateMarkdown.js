function generateMarkdown(data) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link rel="icon" href="./(PUT ICON PATH HERE)" />
        <title>Employee Roster</title>
      </head>
      <body>
        <header class="container-fluid text-white bg-primary vstack gap-3 p-4">
          <h1 id="title" class="text-center">My Team!</h1>
        </header>
        <!-- top div controls the page overall -->
        <div class="d-flex flex-wrap justify-content-center">
          <div class="card m-2" style="width: 18rem">
            <div class="card-body bg-primary">
              <h5 class="card-title">Sam Song</h5>
              <h6 class="card-title">Manager</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 1234</li>
              <li class="list-group-item">
                Email: <a href="#" class="card-link">samuelsong18@gmail.com</a>
              </li>
              <li class="list-group-item">
                Office Number: 678-123-4567
              </li>
            </ul>
          </div>
          <div class="card m-2" style="width: 18rem">
            <div class="card-body bg-success">
              <h5 class="card-title">Sam Song</h5>
              <h6 class="card-title">Engineer</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 1234</li>
              <li class="list-group-item">
                Email: <a href="#" class="card-link">samuelsong18@gmail.com</a>
              </li>
              <li class="list-group-item">
                GitHub: <a href="#" class="card-link">samsong1019</a>
              </li>
            </ul>
          </div>
          <div class="card m-2" style="width: 18rem">
            <div class="card-body bg-danger">
              <h5 class="card-title">Brandom Kim</h5>
              <h6 class="card-title">Intern</h6>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 1234</li>
              <li class="list-group-item">
                Email: <a href="#" class="card-link">brandomKim@gmail.com</a>
              </li>
              <li class="list-group-item">
                School: Massachusetts Institute of Technology
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>`
        
}
module.exports = generateMarkdown;