//* throw error en caso de algun error de input
const axios = require("axios");

const createMovie = () => {
  const title = document.getElementById("Title").value;
  const director = document.getElementById("Name").value;
  const year = document.getElementById("Year").value;
  const duration = document.getElementById("movieDuration").value;
  const genre = document.getElementById("Genre").value.split(",");
  const rate = document.getElementById("Rate").value;
  const poster = document.getElementById("Poster").value;

  if (
    !title ||
    !director ||
    !year ||
    !duration ||
    !genre ||
    genre.length === 0 ||
    !rate ||
    !poster
  ) {
    alert("Por favor, llene todos los campos obligatorios.");
    return null;
  }
  const movie = {
    title: title,
    director: director,
    year: year,
    duration: duration,
    genre: genre,
    rate: rate,
    poster: poster,
  };
  return movie;
};

const clearInputs = () => {
  const movieForm = document.getElementById("formMovie");
  movieForm.reset();
};
const postData = async () => {
  try {
    const movieData = createMovie();
    const response = await axios.post(
      "http://localhost:3000/movies",
      movieData
    );
    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
};

const form = document.getElementById("formMovie");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  postData();
});

const btnClean = document.getElementById("btnClear");
btnClean.addEventListener("click", clearInputs);
