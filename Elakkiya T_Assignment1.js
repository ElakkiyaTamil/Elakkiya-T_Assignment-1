console.log("Elakkiya T_Assignment 1");
const http = require('http');


http.createServer(function (req, res) {
  res.write('<h1>Hello World! - h1</h1>'); 
  res.write('<h2>Hello World! - h2</h2>'); 
  res.end(); 
}).listen(8080); 