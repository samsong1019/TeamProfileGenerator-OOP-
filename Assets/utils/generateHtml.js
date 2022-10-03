const managerMarkdown = (manager) => {
  return ` <div class="card m-2" style="width: 18rem">
    <div class="card-body bg-primary">
    //MANAGER NAME
      <h5 class="card-title">${manager}</h5>
      <h6 class="card-title">Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
    //MANAGER ID
      <li class="list-group-item">ID: ${managerId}</li>
      <li class="list-group-item">
      //MANAGER EMAIL
        Email: <a href="mailto:${managerEmail}" class="card-link">${managerEmail}</a>
      </li>
      <li class="list-group-item">
      //OFFICE NUMBER
        Office Number: ${number}
      </li>
    </ul>
  </div>`;
}

const engineerMarkdown = (engineer) => {
  return `<div class="card m-2" style="width: 18rem">
    <div class="card-body bg-success">
    //ENGINEER NAME
      <h5 class="card-title">${engineerName}</h5>
      <h6 class="card-title">Engineer</h6>
    </div>
    <ul class="list-group list-group-flush">
    //ENGINEER ID
      <li class="list-group-item">${engineerId}</li>
      <li class="list-group-item">
      // EGNINEER EMAIL
        Email: <a href="mailto:${data.engineerEmail}" class="card-link">${data.engineerEmail}</a>
      </li>
      <li class="list-group-item">
      //EGNINEER GITHUB
        GitHub: <a href="github.com/${github}" class="card-link">${github}</a>
      </li>
    </ul>
  </div>`;
}



const internMarkdown = (intern) => {
  return `<div class="card m-2" style="width: 18rem">
  <div class="card-body bg-danger">
  <!-- Interns name -->
    <h5 class="card-title">${data.internName}</h5>
    <h6 class="card-title">Intern</h6>
  </div>
  <ul class="list-group list-group-flush">
  <!--Interns ID NUMBER-->
    <li class="list-group-item">${internId}</li>
    <li class="list-group-item">
    <!--Interns email-->
      Email: <a href="mailto:${data.internsEmail}" class="card-link">${data.internsEmail}</a>
    </li>
    <li class="list-group-item">
      School: ${data.school}
    </li>
  </ul>
</div>`
}








function generateHtml(data) {
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
        // 

        INSERT ALL THE OTHER MARKDOWNS HERE!!!!!!

        //
        </div>
      </body>
    </html>`;
}


module.exports = generateMarkdown;
