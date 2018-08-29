var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var http = require('http');
var giphy = require('giphy-api')();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
  //   console.log(req.query.term)
  // var queryString = req.query.term;
  // var term = encodeURIComponent(queryString);
  // var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC'
  // http.get(url, function(response) {
  //   response.setEncoding('utf8');
  //
  //   var body = '';
  //
  //   response.on('data', function(d) {
  //     body += d;
  //     });
  //
  //   response.on('end', function() {
  //     var parsed = JSON.parse(body);
  //     res.render('home', {gifs: parsed.data})
  //     });
  //   });
// Line 32 should say {gifs: res.data} not {gifs: response.data} like in tutorial
    giphy.search(req.query.term, function (err, response) {
        res.render('home', {gifs: res.data})
      });
});

app.listen(3000, function () {
  console.log('Gif Search app listening on port localhost:3000!');
});
