let imported = require('./main.js')

const b = 5;

let sum = imported.largeNumber + b 
console.log(sum)

let http = require("http");


const server = http.createServer((req, res) => {
    console.log('I am listening');
    res.setHeader("Content-Type", "text/html")
    res.end(`<h1>Hi there at the frontend</h1><p>My module is ${sum} </p>`)
  });
  server.listen(3000, 'localhost');

  const server2 = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.end(`<h1>The date and time are currently: ${imported.date}</h1>`)
  });
  server2.listen(8080, 'localhost');