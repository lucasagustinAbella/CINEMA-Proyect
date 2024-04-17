//* Deberia estar funcionando, solo que creo que la validacion se pisa con la misma ya utilizada en Movies moduls

module.exports = (req, res, next) => {
  const { title, director, year, duration, genre, rate, poster } = req.body;
  if (
    !title ||
    !director ||
    !year ||
    !duration ||
    !rate ||
    !genre ||
    genre.length === 0 ||
    !poster
  ) {
    throw new Error("Validation middleware: Faltan datos");
  }
  next();
};
