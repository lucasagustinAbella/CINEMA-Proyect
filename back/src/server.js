const express = require("express");
const mainRouter = require("./routes/router");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//*middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Ejecutando middleware de prueba propio");
  next();
});

app.use(mainRouter);

module.exports = app;
