import { getMovieById } from './moviesApi.js';

const displayCommentPopup = async (id) => {
  const movie = await getMovieById(id);

  console.log(movie);
}

export { displayCommentPopup }