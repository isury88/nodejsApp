const express =  require('express');

const app = express();

const port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
  res.send('Hello World');
});
app.get('/books', function(req, res) {
  res.send('Hello Book');
});

app.listen(port,  function(err) {
   console.log('running server on port ' + port);
 });