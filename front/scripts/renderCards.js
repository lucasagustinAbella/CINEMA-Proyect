const renderCards = (data) => {
  const movieContainer = document.getElementById("card-container");
  const movieCards = data.map((movie) => {
    // se puede hacer asi o creando una variable por cada item y eso agregarlo al DOM o con forEach-forOf
    return `  
        <div class="movie-card" id="${movie.title}">
            <img src="${movie.poster}" alt="${
      movie.title
    } Poster" style="max-width: 100%;" id="movieImg";>
            <h2><a href="#pordefinir">${movie.title}</a></h2>
            <p>Year: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Duration: ${movie.duration}</p>
            <p>Genre: ${movie.genre.join(", ")}</p>
            <p>Rate: ${movie.rate}</p>
        </div>
    `;
  });
  movieContainer.innerHTML = movieCards.join("");
};

module.exports = renderCards;
