const generateProfile = (employeeArray) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <title>My Team Profile</title>
</head>
<body>
  <header class="jumbotron text-center">
      <h1 class="display-5">My Team</h1>
  </header>
    ${
        employeeArray.map((employee) => {
            return `
            <div class ="card" style="width: 18rem;">
              <div class ="card-body">
                <h3>${employee.name}</h3>
                <h4>${employee.id}</h4>
                <h5>${employee.email}</h5>
                <h6>${employee.role}</h6>
              </div>
            </div>    
            `
        })
    }
</body>
</html>
`
}

module.exports = generateProfile;