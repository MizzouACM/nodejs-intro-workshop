// Import the necessary modules
var express = require('express')
  , http = require('http')
  , db = require('./fakedb');

// Call express to create the app.
var app = express();

// Do app configuration
require('./setup')(app);

// Your code here!


// Creates the server on the port set previously and
// logs when it starts
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
