const generateProfile = (employeeArray) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body class = "bg-dark" >
  <header class="jumbotron text-center bg-success">
      <h1 class="display-5 shadow-lg text-dark">My Team</h1>
  </header>      
  <main>
    <div class="container">
      <div class="row align-items-center shadow-lg">
      ${
        employeeArray.map((employee) => {
            if (employee.role === 'Manager') {
                return `
                <div class ="card shadow-lg p-3 mb-5 bg-success rounded px-md-2 mt-y mx-3" style="width: 20rem;">
                  <div class ="card-body text-success shadow-lg p-3 mb-5 bg-dark rounded">
                    <h3 class="card-title shadow-lg text-center ">${employee.name}</h3>
                    <h4 class="card-title fas fa-coffee">  ${employee.role}</h4>
                    <h5 class="card-title">Employee ID: ${employee.id}</h5>
                    <a class = "text-success" href="mailto:${employee.email}"><h5 class="card-title">${employee.email}</h5></a>
                    <h5 class="card-title">Office # ${employee.office}</h5>
                  </div>
                </div>  
                `;
            } else if (employee.role === 'Engineer')  {
                return `
                <div class ="card shadow-lg p-3 mb-5 bg-success rounded px-md-2 mt-y mx-3" style="width: 20rem;">
                  <div class ="card-body text-success shadow-lg p-3 mb-5 bg-dark rounded">
                    <h3 class="card-title shadow-lg text-center">${employee.name}</h3>
                    <h4 class="card-title fas fa-cogs">  ${employee.role}</h4>
                    <h5 class="card-title">Employee ID: ${employee.id}</h5>
                    <a class = "text-success" href="mailto:${employee.email}"><h5 class="card-title">${employee.email}</h5></a>
                    <a class = "text-success" href="https://github.com/${employee.github}" target="_blank"><h5 class="card-title">GitHub: ${employee.github}</h5></a>
                  </div>
                </div>  
                `;
            } else if (employee.role === 'Intern') {
                return `
                <div class ="card shadow-lg p-3 mb-5 bg-success rounded px-md-2 mt-y mx-3" style="width: 20rem;">
                  <div class ="card-body text-success shadow-lg p-3 mb-5 bg-dark rounded">
                    <h3 class="card-title shadow-lg text-center">${employee.name}</h3>
                    <h4 class="card-title fa fa-graduation-cap">  ${employee.role}</h4>
                    <h5 class="card-title">Employee ID: ${employee.id}</h5>
                    <a class = "text-success" href="mailto:${employee.email}"><h5 class="card-title">${employee.email}</h5></a>         
                    <h5 class="card-title">School: ${employee.school}</h5>
                  </div>
                </div>  
                `;
            }  
        })
      }
    </div>
  </main>
</body>
</html>
`
}

module.exports = generateProfile;