const searchActionMoviesURL = "https://api.tvmaze.com/search/shows?q=action";
const actionMoviesBaseURL = "https://api.tvmaze.com/shows/";

const getMovies = async () => {
  const results = await fetch(searchActionMoviesURL);
  
  const movies = await results.json();
  return movies;
}

const getMovieById = async (id) => {
  const result = await fetch(actionMoviesBaseURL + id);
  
  const movie = await result.json();
  return movie;
}

export { getMovies, getMovieById }