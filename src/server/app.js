var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var os = require("os");
var app = express();
app.use(express.static("dist"));

var db = require('./queries');

// Routes
router.get('/api/movies', db.getAllMovies);
router.get('/api/movies/:id', db.getSingleMovie);
router.post('/api/movies', db.createMovie);
router.put('/api/movies/:id', db.updateMovie);
router.delete('/api/movies/:id', db.deleteMovie);

app.listen(8080, () => console.log("Listening on port 8080!"));
