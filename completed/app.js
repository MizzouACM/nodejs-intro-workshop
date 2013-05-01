// Import the necessary modules
var express = require('express')
  , http = require('http')
  , db = require('./fakedb');

// Call express to create the app.
var app = express();

// Do app configuration
require('./setup')(app);

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
