const API_KEY = "b56a499298524dd683e57a172dff5ee7";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTvDiscover: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchMovieDiscover: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchRomantic: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchAction: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchAnimation: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchComedy: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchDrama: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=18`,
  fetchDocumentary: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fetchFantasy: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=14`,
  fetchHorror: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchScienceFiction: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchThriller: `discover/tv?api_key=${API_KEY}&language=en-US&with_genres=53`,
};

export default requests;
