//* POSIBLE MAIN ROUTER MODULADO
const express = require("express");
const mainRouter = express.Router();
const movieRouter = require("./movieRouter");
const homeRouter = require("./homeRouter");

mainRouter.use("/movies", movieRouter);
mainRouter.use("/", homeRouter);

module.exports = mainRouter;
