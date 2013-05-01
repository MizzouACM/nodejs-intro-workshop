# Node.js workshop!

0.  How the web works!
Client, server, etc.

1. Hello world
```javascript
app.get('/', function(req, res) {
  res.send('Hello world!');
});
```

2. Another route that sends a plain string
```javascript
app.get('/new', function(req, res) {
  res.send('You are on the new page!');
});
```

3. Static routes aren't cool, make a route that is dynamic with parameters!
```javascript
app.get('/note/:id', function(req,res) {
  res.send('You requested note with id: ' + req.params.id);
});
```

4. Querystring!  Used for HTTP GET requests.  Key value.
```javascript
app.get('/', function (req, res) {
  res.send('Hello ' + req.query.name + '!');
});
```

5.  Any questions?


6.  Templating!  Respond to a request with a special kind of HTML page that you can add logic to.  Convert the hello page to be a simple HTML page that responds with 'hello name!' if it name is passed in.  Uses hbs for templates (Based off of handlebars which is based off of Mustache).
```html
<html>
<head>
  <title>Awesome site!</title>
</head>
<body>
  {{#name}}
    <h1>Hello {{.}}!</h1>
  {{/name}}
  {{^name}}
    <h1>Hello world!</h1>
  {{/name}}
</body>
</html>
```

7.  You can also use templates for looping!  For now, create a list of notes and pass them to the index page.
```javascript
// app.js
app.get('/', function(req, res) {
  var notes = ['Note numero uno!', 'Note two', 'Yay node.js'];
  res.render('index', {notes: notes});
});
```
```html
<ul>
  {{#notes}}
    <li>{{.}}</li>
  {{/notes}}
</ul>
```

8.  Cover what HTTP is!
HTTP Methods
GET request is requesting or getting data.
POST is setting or creating data.

9.  Make a new template called 'new' with a form!
```html
<html>
<head>
  <title>Awesome site!</title>
</head>
<body>
  <h1>Awesome site!</h1>
  <h1>Make a new note!</h1>
  <form action="/create" method="post">
    Title:
    <br>
    <input name="title" type="text" placeholder="Note title here!">
    <br>
    Content: 
    <br>
    <textarea name="content" rows="5" columns = "100" placeholder="Your content here!"></textarea>
    <br>
    <input type="submit" value="Create note!">
  </form>
</body>
</html>
```

10.  So we've defined our form, but what happens if we submit it?  Error! We still need to define a route for '/create'.  This will be a post route!
```javascript
app.post('/create', function(req, res) {
  res.send('Coming soon to a theater near you!');
});
```

11. But how do we access the POST data?  It's a little different from how we accessed the GET data.
```javascript
app.post('/create', function(req, res) {
  res.send('You sent me a title of ' + req.body.title + ' and a content of ' + req.body.content + '.');
});
```

12.  So now that we have our form correctly sending the data to the server, what should we do next?  It currently throws away the data after completing the function.  We can use a fake database to save it!
app.post('/create', function(req, res) {
  db.addNote(req.body.title, req.body.content);
  res.send('Note created with title ' + req.body.title + '!');
});

13. We are now creating notes!  But do we have any proof?  We aren't yet actually rendering any notes on the server!  Let's fix it.
```javascript
app.post('/create', function(req, res) {
  db.addNote(req.body.title, req.body.content);
  res.send('Note created with title ' + req.body.title + '!');
});
```

14.  Uh oh!  It's only printing that it's an object.  That's because the {{.}} in handlebars prints the currently looping item.  What we want to do is print the note title.  So within the loop, we'll use {{title}}.
```html
{{#notes}}
  <li>{{title}}</li>
{{/notes}}
```

15.  It's kind of a pain to go to the main page each time we create a note.  Let's add a redirect!
```javascript
app.post('/create', function(req, res) {
  db.addNote(req.body.title, req.body.content);
  res.redirect('/');
});
```

16.  It's also a pain to go to /new every time we want to add something.
```html
<a href="/new">Create a new note!</a>
```

16.  There!  We now have a semiworking application!  But we still can't see any note body.  Here is where our dynamic routing from before will be very useful.
```javascript
<li>
  <a href="/note/{{id}}">
    {{title}}
  </a>
</li>
```

17.  Now we need a new template to render the content of a note!
```html
<html>
<head>
  <title>Awesome site!</title>
</head>
<body>
  <h1>{{note.title}}</h1>
  <p>{{note.content}}</p>
  <a href="/">Back to Home</a>
</body>
</html>
```

18.  And we need to actually render that new template and pass it the note by finding it in the database!
```javascript
app.get('/note/:id', function(req,res) {
  var note = db.getNote(req.params.id)
  res.render('note', {note: note});
});
```




