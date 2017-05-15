var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);



app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname + '/css'));

app.post('/api/words', function(req, res) {
  // res.send("Hello world");
  res.sendFile(path.normalize(__dirname + 'words.json'));
});


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// app.get('/', function(req, res) {
//   res.sendFile(path.normalize(__dirname + 'words.json'));
// });




app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
