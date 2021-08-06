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
  const likes = await getLikes();

  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';
  for (let i = 0; i < movies.length; i += 1) {
    const likeObject = likes.filter((like) => like.item_id === movies[i].show.id);

    let numberOfLikes = '';
    if (likeObject.length > 0) {
      numberOfLikes = `${likeObject[0].likes} likes`;
    }

    const image = movies[i].show.image?.medium ?? 'https://i.ibb.co/nPzyFm6/placeholder.png';
    movieList.insertAdjacentHTML('beforeend', ` 
      <div class="movie-list-container">
        <div class="movie-listcontent">
          <img src="${image}" />
        </div>
          <div>
            <h2>${movies[i].show.name}</h2>
            <p>${numberOfLikes}</p>
          </div>
          <button data-id="${movies[i].show.id}" class="btn-comments">Comments</button>
          <span like-id="${movies[i].show.id}" class="btn-likes"><i class="fas fa-heart fa-lg"></i></span>
      </div>`);
    const button = document.querySelectorAll(`[data-id="${movies[i].show.id}"]`)[0];
    button.addEventListener('click', (e) => {
      const movieId = e.target.getAttribute('data-id');
      displayCommentPopup(movieId);
    });

    const likeBtn = document.querySelectorAll(`[like-id="${movies[i].show.id}"]`)[0];
    likeBtn.addEventListener('click', async (e) => {
      const movieId = e.target.parentElement.parentElement.getAttribute('like-id');
      const status = await addLike(Number(movieId));
      const newLikes = await getLikes(movieId);
      const newLikesObject = newLikes.filter((like) => like.item_id === movies[i].show.id);
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