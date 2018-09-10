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
    res.status(200).json({
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
  console.log(req.body)
  req.body.year = parseInt(req.body.year);
  req.body.rating = parseInt(req.body.rating);
  db.none('insert into movie(title, genre, year, rating, actors)' +
      'values(${title}, ${genre}, ${year}, ${rating}, ${actors}::json[])',
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
  console.log(req.body)
  db.none('update movie set title=$1, genre=$2, year=$3, rating=$4, actors=$5::json[] where id=$6',
    [ req.body.title,
      req.body.genre,
      parseInt(req.body.year),
      parseInt(req.body.rating),
      req.body.actors,
      parseInt(req.body.id)
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
  console.log('delete from movie where id = ' + movieID)
  db.none('delete from movie where id = $1', movieID)
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

// function handleActorsAndRoles(req, res, next) {

// }

module.exports = {
  getAllMovies: getAllMovies,
  getSingleMovie: getSingleMovie,
  createMovie: createMovie,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
};

