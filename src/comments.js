import { getMovieById } from './moviesApi.js';

const displayCommentPopup = async (id) => {
  const movie = await getMovieById(id);

  generatePopupContent(movie);
}

const generatePopupContent = (movie) => {
  const popup = document.getElementById('popup');
  
  popup.innerHTML = "";
  popup.insertAdjacentHTML('beforeend', ` 
    <div>
      <img src="${movie.image.medium}" />
    <div>`
  );
}

export { displayCommentPopup }