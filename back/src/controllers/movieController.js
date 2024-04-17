const moviesService = require("../services/moviesService");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getAllMovies();
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  },
  createMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await moviesService.createMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).json(newMovie);
      console.log("Movie creada");
    } catch (err) {
      res.status(500).json({ err: err.message });
      console.log("Error en la creacion");
    }
  },
};
