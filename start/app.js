

// Import the necessary modules
var express = require('express')
  , http = require('http')
  , path = require('path')
  , db = require('./fakedb');

// Call express to create the app.
var app = express();

// Express configuration
app.configure(function(){

  // Set the port the application will run on to
  // the environment variable PORT or 3000
  app.set('port', process.env.PORT || 3000);

  // Set the directory to get the views to be /views
  app.set('views', __dirname + '/views');

  // Use the 'ejs' view engine
  app.set('view engine', 'ejs');

  // Use the express development style logging
  app.use(express.logger('dev'));

  // Parses request input
  app.use(express.bodyParser());

  // Does the routing we'll define below!
  app.use(app.router);
});

// When in development mode, use the error handler
app.configure('development', function(){
  app.use(express.errorHandler());
});

// Defines a route of '/' to return hello world!
app.get('/', function(req, res) {
  res.send('Hello world!');
});

// Creates the server on the port set previously and
// logs when it starts
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
