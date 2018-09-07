var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/movies';
var db = pgp(connectionString);

// add query functions

function getAllMovies(req, res, next){
  db.any('select * from movie')
  .then(function(data){
    res.state(200).json({
      status: 'success',
      data: data
    })
  })
  .catch(function(err){
    return next(err);
  })
}

function getSingleMovie(req, res, next) {
  var movieID = parseInt(req.params.id);
  db.one('select * from movie where id = $1', movieID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createMovie(req, res, next) {
  req.body.year = parseInt(req.body.year);
  req.body.rating = parseInt(req.body.rating);
  db.none('insert into movie(title, genre, year, rating)' +
      'values(${title}, ${genre}, ${year}, ${rating})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateMovie(req, res, next) {
  db.none('update movie set title=$1, genre=$2, year=$3, rating=$4 where id=$5',
    [ req.body.title,
      req.body.genre,
      parseInt(req.body.year),
      parseInt(req.body.rating),
      parseInt(req.params.id)
    ])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteMovie(req, res, next) {
  var movieID = parseInt(req.params.id);
  db.result('delete from movie where id = $1', movieID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllMovies: getAllMovies,
  getSingleMovie: getSingleMovie,
  createMovie: createMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
};

