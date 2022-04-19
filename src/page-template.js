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
          <h1 class="display-5">My Team</h1>
      </header>
      <main class = "">
        <div class="container">
          <div class="row"> 
      ${
        employeeArray.map((employee) => {
            // make an if statement for each role to list the appropriate attributes fore each team member
            /*if (employee.office === undefined) {
                return `''`;
            }*/
            return `
            <div class ="card shadow-lg p-3 mb-5 bg-white rounded px-md-4 mt-y mx-5 border-success " style="width: 18rem;">
            <div class ="card-body text-success ">
              <h2 class="card-title">${employee.name}</h2>
              <h3 class="card-title">${employee.office}</h3>
              <h3 class="card-title">${employee.role}</h3>
              <h4 class="card-title">${employee.id}</h4>
              <h5 class="card-title">${employee.email}</h5>  
              <h5 class="card-title">${employee.github}</h5>
              <h5 class="card-title">${employee.school}</h5>
            </div>
          </div>  
            `
            
        })
      }
    </div>
  </main>
</body>
</html>
`
}

module.exports = generateProfile;