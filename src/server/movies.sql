DROP DATABASE IF EXISTS movies;
CREATE DATABASE movies;

\c movies

CREATE TABLE movie (
  ID SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre VARCHAR NOT NULL,
  year INTEGER NOT NULL,
  rating INTEGER NOT NULL,
  actors JSON[]
);

-- CREATE TABLE actor (
--   ID SERIAL PRIMARY KEY,
--   name VARCHAR NOT NULL
-- );

-- CREATE TABLE role (
--   ID SERIAL PRIMARY KEY,
--   role VARCHAR,
--   actorId INTEGER,
--   movieId INTEGER,
--   FOREIGN KEY (movieId) REFERENCES actor(ID),
--   FOREIGN KEY (actorId) REFERENCES movie(ID)
-- );

INSERT INTO movie (title, genre, year, rating, actors)
  VALUES (
    'Star Wars: Episode IV - A New Hope',
    'Science Fiction',
    1977,
    4,
    array['{"actor": "Mark Hamill", "role": "Luke Skywalker"}',
          '{"actor": "Carrie Fisher", "role": "Leia Organa"}']::json[]
    );

-- INSERT INTO actor (name)
--   VALUES ('Mark Hamill');

-- INSERT INTO role (role, actorId, movieId)
--   VALUES ('Luke Skywalker', 1, 1)