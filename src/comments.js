import { getMovieById } from './moviesApi.js';
import { getComments } from './involvementApi.js'

const displayCommentPopup = async (id) => {
  const movie = await getMovieById(id);

  generatePopupContent(movie);
}

const generatePopupContent = async (movie) => {
  const popup = document.getElementById('popup');
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
  popup.innerHTML = "";
  let image = movie.image?.medium ?? 'https://ultimateactionmovies.com/wp-content/uploads/2021/07/Eliminators-696x392.jpeg'
  
  const movieId = movie.id; 
  const comments = await getComments(movieId);
  
  let commentBlock = "";
  commentBlock += `<h3>Comments</h3>`;
  comments.forEach(comment => {
    const date = new Date();
    const dateFormated = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
    commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;
  });
  popup.insertAdjacentHTML('beforeend', ` 
    <div class="popup-container">
      <div class="inner-content">
        <div class="photo-close">
          <img src="${image}" />
          <span type="button" class="close-popup"><i class="fas fa-times fa-2x"></i></span>
        </div>
        <h2>${movie.name}</h2>
        <div class="movie-description-1">
          <p>Type: ${movie.type}</p>
          <p>Language: ${movie.language}</p>
        </div>
        <div class="movie-description-2">
          <p>Status: ${movie.status}</p>
          <p>Premiered: ${movie.premiered}</p>
        </div>
        <div class="comments-display">
          ${commentBlock}
        <div>
      </div>
    </div>`
  );
  popup.style.display = "block";
  const closeButton = document.getElementsByClassName('close-popup')[0];
  closeButton.addEventListener('click', () => {
    popup.style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
  })
}

export { displayCommentPopup }