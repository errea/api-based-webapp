import { getMovies } from './moviesApi.js';
import { displayCommentPopup } from './comments.js';
  
  const displayMovies = async () => {
    const movies = await getMovies();
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = "";
    movies.forEach((movie) => {
      let image = movie.show.image?.medium ?? 'https://ultimateactionmovies.com/wp-content/uploads/2021/07/Eliminators-696x392.jpeg';
      movieList.insertAdjacentHTML('beforeend', ` 
      <div class="movie-list-container">
        <div class="movie-listcontent">
          <img src="${image}" />
        </div>
          <div>
            <h2>${movie.show.name}</h2>
          </div>
          <button data-id="${movie.show.id}" class="btn-comments">Comments</button>
      </div>`
      );
      const button = document.querySelectorAll(`[data-id="${movie.show.id}"]`)[0];
      button.addEventListener('click', (e) => {
        const movieId = e.target.getAttribute('data-id');
        displayCommentPopup(movieId);
        
      });
    });
  }

  export { displayMovies };
  

  