

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

  // Use the 'hbs' view engine
  app.set('view engine', 'hbs');

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

// Routes here!
app.get('/', function(req, res) {
  var notes = db.getNotes();
  res.render('index', {notes: notes});
});

app.get('/new', function(req, res) {
  res.render('new');
});

app.post('/create', function(req, res) {
  db.addNote(req.body.title, req.body.content);
  res.redirect('/');
});

app.get('/note/:id', function(req,res) {
  var note = db.getNote(req.params.id)
  res.render('note', {note: note});
});

// Creates the server on the port set previously and
// logs when it starts
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
