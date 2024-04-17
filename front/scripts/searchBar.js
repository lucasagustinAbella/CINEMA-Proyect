//* Situacion dificil

// Definimos una función que realizará la búsqueda y mostrará las sugerencias
// const search = () => {
//   const searchInput = document.getElementById("searchInput");
//   const suggestionsContainer = document.getElementById("suggestionsContainer");
//   const movies = document.querySelectorAll(".movie-card");

// Evento al escribir en el campo de búsqueda
//   searchInput.addEventListener("input", () => {
//     const searchTerm = searchInput.value.toLowerCase();

// Limpiar las sugerencias anteriores
//     suggestionsContainer.innerHTML = "";

// Filtrar películas y generar sugerencias
//     const suggestions = [];
//     for (let i = 0; i < movies.length; i++) {
//       const titleElement = movies[i].querySelector(".title");
//       if (titleElement) {
//         const textValue = titleElement.textContent.toLowerCase();
//         if (textValue.includes(searchTerm)) {
//           suggestions.push(textValue);
//         }
//       }
//     }

// Mostrar sugerencias
//     suggestions.forEach((suggestion) => {
//       const suggestionElement = document.createElement("div");
//       suggestionElement.textContent = suggestion;
//       suggestionElement.classList.add("suggestion");
//       suggestionElement.addEventListener("click", () => {
//         console.log(suggestionsContainer);
//         searchInput.value = suggestion;
//         suggestionsContainer.innerHTML = ""; // Limpiar las sugerencias cuando se seleccione una
//       });
//       suggestionsContainer.appendChild(suggestionElement);
//     });
//   });
// };

// module.exports = search;
