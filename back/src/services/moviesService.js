//* Funcinalidad con base de datos propia

const Movie = require("../models/Movies");

module.exports = {
  getAllMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },
  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
