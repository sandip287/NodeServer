var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
 
  console.log('server started..')
}).listen(8080); //the server object listens on port 8080
 console.log('server started..')
  console.log('http://localhost:8080')