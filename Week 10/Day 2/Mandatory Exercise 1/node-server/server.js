const user = {
    firstname: 'John',
    lastname: 'Doe'
}

let http = require("http")

let server = http.createServer((req, res)=>{
    console.log("Running on port 8080")
    res.setHeader("Content-Type", "text/html");
    res.end(`<p>${JSON.stringify(user)}</p>`)
  })

server.listen(8080)