import { getMovies } from './moviesApi.js';
import displayCommentPopup from './comments.js';
import { addLike, getLikes } from './likes_api.js';

const getCountMovies = () => {
  const movieCount = document.getElementById('movie-list').children.length;
  return movieCount;
};

const updateMovieTitle = (count) => {
  const movieTitle = document.getElementById('movie-link');
  movieTitle.innerText = `Movies (${count})`;
};

const displayMovies = async () => {
  const movies = await getMovies();
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';
  for (const movie of movies) {
    const likes = await getLikes(movie.show.id);
    const likeObject = likes.filter((like) => like.item_id === movie.show.id);
    let numberOfLikes = '';
    if (likeObject.length > 0) {
      numberOfLikes = `${likeObject[0].likes} likes`;
    }
    const image = movie.show.image?.medium ?? 'https://ultimateactionmovies.com/wp-content/uploads/2021/07/Eliminators-696x392.jpeg';
    movieList.insertAdjacentHTML('beforeend', ` 
      <div class="movie-list-container">
        <div class="movie-listcontent">
          <img src="${image}" />
        </div>
          <div>
            <h2>${movie.show.name}</h2>
            <p>${numberOfLikes}</p>
          </div>
          <button data-id="${movie.show.id}" class="btn-comments">Comments</button>
          <button like-id="${movie.show.id}" class="btn-likes"><i class="fas fa-heart"></i></button>
      </div>`);
    const button = document.querySelectorAll(`[data-id="${movie.show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const movieId = e.target.getAttribute('data-id');
      displayCommentPopup(movieId);
    });
    const likeBtn = document.querySelectorAll(`[like-id="${movie.show.id}"]`)[0];
    likeBtn.addEventListener('click', async (e) => {
      const movieId = e.target.parentElement.parentElement.getAttribute('like-id');
      const status = await addLike(Number(movieId));
      const newLikes = await getLikes(movieId);
      const newLikesObject = newLikes.filter((like) => like.item_id === movie.show.id);
      const numberOfLikes = `${newLikesObject[0].likes} likes`;
      if (status === 201) {
        const likeDisplay = likeBtn.previousElementSibling.previousElementSibling.children[1];
        likeDisplay.innerText = numberOfLikes;
      }
    });
  }
  const movieCount = getCountMovies();
  updateMovieTitle(movieCount);
};

export default displayMovies;