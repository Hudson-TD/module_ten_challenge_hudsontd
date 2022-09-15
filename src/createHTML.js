// Manager card creation with collected data
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="cardHeader">
                <h3>${manager.name}</h3>
                <h4>🚀 Manager</h4>
            </div>
            <div class="cardBody">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Engineer card creation with collected data
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="cardHeader">
                <h3>${engineer.name}</h3>
                <h4>💻 Engineer</h4>
            </div>
            <div class="cardBody">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// Intern card creation with collected data
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="cardHeader">
                <h3>${intern.name}</h3>
                <h4>📚 Intern</h4>
            </div>
            <div class="cardBody">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// HTML file creation
createHTML = (data) => {
    // Array storing team entries that are created based on the defined role
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

//HTML structure and basic formatting with Bootstrap + Google font
const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&family=Ubuntu&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
  </head>
  <body>
      <header>
          <nav class="mb-0 h1 w-100 text-center" id="navBar">
              <span>Team Overview</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>    
  </body>
  </html>
`;
}

module.exports = createHTML;