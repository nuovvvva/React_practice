const API_KRY = "2b2d7ceb711fb8038f1417e083c99bc3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KRY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KRY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};