import { getMovieById } from './moviesApi.js';

const displayCommentPopup = async (id) => {
  const movie = await getMovieById(id);

  generatePopupContent(movie);
}

const generatePopupContent = (movie) => {
  const popup = document.getElementById('popup');
  
  popup.innerHTML = "";
  popup.insertAdjacentHTML('beforeend', ` 
    <div class="popup-container">
      <div class="inner-content>
        <div class="photo-close">
          <img src="${movie.image.medium}" />
          <input type="button" class="close-popup"><i class="fas fa-times"></i>
        </div>
        <h3>${movie.name}</h3>
        <div class="movie-description-1">
          <p>Type: ${movie.type}</p>
          <p>Language: ${movie.language}</p>
        </div>
        <div class="movie-description-2">
          <p>Status: ${movie.status}</p>
          <p>Premiered: ${movie.premiered}</p>
        </div>
      <div>
    </div>`
  );
}

export { displayCommentPopup }