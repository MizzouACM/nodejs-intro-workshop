# Node.js workshop!

1. Hello world
```javascript
app.get('/', function(req, res) {
  res.send('Hello world!');
});
```

2. Another route that sends a plain string
```javascript
app.get('/create', function(req, res) {
  res.send('You are on the create page!');
});
```

3. Static routes aren't cool, make a route that is dynamic with parameters!
```javascript
app.get('/post/:id', function(req,res) {
  res.send('You requested post with id: ' + req.params.id);
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

7.  


