const homeController = require("../controllers/homeController");
// const { get } = require("../server");
const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", homeController.getHome);

homeRouter.post("/", homeController.postHome);

module.exports = homeRouter;