const generateTeam = (data) => {
  return `<!DOCTYPE html>
  <html lang="en-US">
  
    <head>
      <meta charset="UTF-8">
      <title>HTML Bio for new team</title>
      <link rel='stylesheet' type='text/css' href='../Assets/css/style.css'>
    </head>
  
    <body>
      <div class="row">
        <div class="column">
          <div class="card">
            <div class="container">
              <h2>${data[0].name}</h2>
              <p class="title">${data[0].getRole()}</p>
              <p>Office Number:${data[0].getOfficeNumber()}</p>
              <p><a href="mailto:${data[0].email}">My Email</a></p>
            
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="container">
              <h2>${data[1].name}</h2>
              <p class="title">${data[1].getRole()}</p>
              <p> <a href="https://github.com/${data[1].github}" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p><a href="mailto:${data[1].email}">My Email</a></p>
           
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="container">
              <h2>${data[2].name}</h2>
              <p class="title">${data[2].getRole()}</p>
              <p>${data[2].school}</p>
              <p><a href="mailto:${data[2].email}">My Email
              </a></p>
            </div>
          </div>
        </div>
      </div>
    </body>
  
  </html>`
}

module.exports = generateTeam;
