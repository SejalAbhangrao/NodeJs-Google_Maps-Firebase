// Include Server Dependencies.

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
// var mongoose = require('mongoose');
var logger = require('morgan');



// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.text());

app.use(express.static(__dirname));

app.get('/', function (req, res)
{

  res.sendfile('index.html');
});




app.listen(3000);

console.log("Server started at 3000");
