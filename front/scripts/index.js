const axios = require("axios");

const renderCards = require("./renderCards.js");
// const search = require("./searchBar.js"); //* Search function
// search();

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const data = response.data;
    // console.log(data);
    renderCards(data);
  } catch (err) {
    // alert(err.message);
    console.error(err.message);
  }
};

fetchData();

////////////////////////////////////////////////
//*Old HW

// $.get("https://students-api.2.us-1.fl0.io/movies", data => {
//     renderCards(data);
// });

// const URL ="https://students-api.2.us-1.fl0.io/movies";

// NO USO BUNDLE PORQUE CON UNA SOLA FUNCION NO HACE FALTA SEPARAR EN MAS MODULOS

// POSIBLE SOLUCION
// const movieContainer = document.getElementById("card-container");

// const renderCards = (data) => {
// const movieCards = data.map(movie => {   // se puede hacer asi o creando una variable por cada item y eso agregarlo al DOM o con forEach-forOf
//     return `
//         <div class="movie-card" id="${movie.title}">
//             <img src="${movie.poster}" alt="${movie.title} Poster" style="max-width: 100%;">
//             <h2><a href="#pordefinir">${movie.title}</a></h2>
//             <p>Year: ${movie.year}</p>
//             <p>Director: ${movie.director}</p>
//             <p>Duration: ${movie.duration}</p>
//             <p>Genre: ${movie.genre.join(", ")}</p>
//             <p>Rate: ${movie.rate}</p>
//         </div>
//     `;
// })
//     movieContainer.innerHTML = movieCards.join('');
// };

// REFACTORIZAR: Mismo resultado, diferente desarrollo y capaz optimizacion
