const movieController = require("../controllers/movieController");
const express = require("express");
const movieRouter = express.Router();
const movieValidation = require("../middlewares/movieValidation");

movieRouter.get("/", movieController.getMovies);
movieRouter.post("/", movieValidation, movieController.createMovie);

module.exports = movieRouter;
