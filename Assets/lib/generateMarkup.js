const Manager = (manager) => {
  return ` <div class="card m-2" style="width: 18rem">
    <div class="card-body bg-primary">
    <!-- name -->
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-title">Manager</h6>
    </div>
    <ul class="list-group list-group-flush">
    <!--ID NUMBER-->
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">
      <!-- email-->
        Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a>
      </li>
      <li class="list-group-item">
      <!--Extra-->
        Office Number: ${manager.officeNumber}
      </li>
    </ul>
  </div>`;
};
const PrincipalSoftwareEngineer = (principalSoftwareEngineer) => {
  return `<div class="card m-2" style="width: 18rem">
    <div class="card-body bg-success">
    <!-- name -->
      <h5 class="card-title">${principalSoftwareEngineer.name}</h5>
      <h6 class="card-title">PrincipalSoftwareEngineer</h6>
    </div>
    <ul class="list-group list-group-flush">
    <!--ID NUMBER-->
      <li class="list-group-item">${principalSoftwareEngineer.id}</li>
      <li class="list-group-item">
      <!-- email-->
        Email: <a href="mailto:${principalSoftwareEngineer.email}" class="card-link">${principalSoftwareEngineer.email}</a>
      </li>
      <li class="list-group-item">
      <!--Extra-->
        GitHub: <a href="https://github.com/${principalSoftwareEngineer.gitHub}" class="card-link">${principalSoftwareEngineer.gitHub}</a>
      </li>
    </ul>
  </div>`;
};
const SeniorSoftwareEngineer = (seniorSoftwareEngineer) => {
  return `<div class="card m-2" style="width: 18rem">
    <div class="card-body bg-success">
    <!-- name -->
      <h5 class="card-title">${seniorSoftwareEngineer.name}</h5>
      <h6 class="card-title">SeniorSoftwareEngineer</h6>
    </div>
    <ul class="list-group list-group-flush">
    <!--ID NUMBER-->
      <li class="list-group-item">${seniorSoftwareEngineer.id}</li>
      <li class="list-group-item">
      <!-- email-->
        Email: <a href="mailto:${seniorSoftwareEngineer.email}" class="card-link">${seniorSoftwareEngineer.email}</a>
      </li>
      <li class="list-group-item">
      <!--Extra-->
        GitHub: <a href="https://github.com/${seniorSoftwareEngineer.gitHub}" class="card-link">${seniorSoftwareEngineer.gitHub}</a>
      </li>
    </ul>
  </div>`;
};
const SoftwareEngineer = (softwareEngineer) => {
  return `<div class="card m-2" style="width: 18rem">
    <div class="card-body bg-success">
    <!-- name -->
      <h5 class="card-title">${softwareEngineer.name}</h5>
      <h6 class="card-title">SoftwareEngineer</h6>
    </div>
    <ul class="list-group list-group-flush">
    <!-- ID NUMBER-->
      <li class="list-group-item">${softwareEngineer.id}</li>
      <li class="list-group-item">
      <!-- email-->
        Email: <a href="mailto:${softwareEngineer.email}" class="card-link">${softwareEngineer.email}</a>
      </li>
      <li class="list-group-item">
      <!--Extra-->
        GitHub: <a href="https://github.com/${softwareEngineer.gitHub}" class="card-link">${softwareEngineer.gitHub}</a>
      </li>
    </ul>
  </div>`;
};

const Intern = (intern) => {
  return `<div class="card m-2" style="width: 18rem">
  <div class="card-body bg-danger">
  <!-- name -->
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-title">Intern</h6>
  </div>
  <ul class="list-group list-group-flush">
  <!--ID NUMBER-->
    <li class="list-group-item">${intern.id}</li>
    <li class="list-group-item">
    <!-- email-->
      Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
    </li>
    <!--Extra-->
    <li class="list-group-item">
      School: ${intern.school}
    </li>
  </ul>
</div>`;
};

const mergeAllRoles = (data) => {
  cardArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    if (role === "Manager") {
      const managerCard = Manager(employee);
      cardArray.push(managerCard);
    }
    if (role === "PrincipalSoftwareEngineer") {
      const principalSoftwareEngineerCard = PrincipalSoftwareEngineer(employee);
      cardArray.push(principalSoftwareEngineerCard);
    }
    if (role === "SeniorSoftwareEnginner") {
      const seniorSoftwareEngineerCard = SeniorSoftwareEngineer(employee);
      cardArray.push(seniorSoftwareEngineerCard);
    }
    if (role === "SoftwareEnginner") {
      const softwareEngineerCard = SoftwareEngineer(employee);
      cardArray.push(softwareEngineerCard);
    }
    if (role === "Intern") {
      const internCard = Intern(employee);
      cardArray.push(internCard);
    }
  }
  const displayTeam = cardArray.join("");
  const generateTeam = generateHtml(displayTeam);
  return generateTeam;
};

const generateHtml = (displayTeam) => {
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
        ${displayTeam}
        </div>
      </body>
    </html>`;
};

module.exports = mergeAllRoles;
