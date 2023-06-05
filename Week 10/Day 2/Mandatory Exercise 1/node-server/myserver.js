let http = require("http")

let server = http.createServer((req, res)=>{
    console.log("Running on port 3000")
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>This is my first response</h1>
            <h1>This is my second response</h1>
            <p>This is my third response</p>`)
  })

server.listen(3000)

