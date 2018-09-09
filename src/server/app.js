var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser')

var app = express();
app.use(express.static("dist"));
app.use(bodyParser.json());
app.use('/', indexRouter);

app.listen(8080, () => console.log("Listening on port 8080!"));
