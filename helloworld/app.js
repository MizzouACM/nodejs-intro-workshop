// Import the http module that is built into Node.js
var http = require('http');

// Create a server and supply it with a function to handle requests
http.createServer(function(request, response) {

  // Log that we received a request
  console.log('We received a request!');

  // Write the HTTP header that tells the browser we're sending plain text
  response.writeHead(200, {"Content-Type": "text/plain"});

  // Write 'Hello world!' to the response
  response.write('Hello world!');

  // End the response
  response.end();

}).listen(3000);
// Make the server listen on port 3000.

// State that the server is now running!
console.log('Server listening on localhost:3000!');
