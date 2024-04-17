const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  year: {
    type: Number,
    required: true,
    min: [1895, `No hay peliculas previo a {VALUE}]`],
  },
  director: String,
  duration: String,
  genre: Array,
  rate: Number,
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
