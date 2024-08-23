import axios from "axios";

export const fetchMovies = async (searchValue = "Lion King") => {
  const url = "https://api.themoviedb.org/3/search/movie";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg2ZDhlOWEwYzBhODRmODMxMGUzYWNiYjM1YmUyZCIsIm5iZiI6MTcyNDQyMDg4NS4zMjY4MzEsInN1YiI6IjY2OWZjYzNhZTMyZTg5NmQ2NjUyNzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgMNVys-dP0mtn9s8IuxhfWW5GjXC6Z2JiGZ9-ZzRBY",
    },
    params: {
      query: searchValue,
    },
  };
  try {
    const res = await axios.get(url, options);

    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg2ZDhlOWEwYzBhODRmODMxMGUzYWNiYjM1YmUyZCIsIm5iZiI6MTcyNDQyMDg4NS4zMjY4MzEsInN1YiI6IjY2OWZjYzNhZTMyZTg5NmQ2NjUyNzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgMNVys-dP0mtn9s8IuxhfWW5GjXC6Z2JiGZ9-ZzRBY",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchPopularMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day";

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg2ZDhlOWEwYzBhODRmODMxMGUzYWNiYjM1YmUyZCIsIm5iZiI6MTcyNDQyMDg4NS4zMjY4MzEsInN1YiI6IjY2OWZjYzNhZTMyZTg5NmQ2NjUyNzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgMNVys-dP0mtn9s8IuxhfWW5GjXC6Z2JiGZ9-ZzRBY",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchReviewsById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg2ZDhlOWEwYzBhODRmODMxMGUzYWNiYjM1YmUyZCIsIm5iZiI6MTcyNDQyMDg4NS4zMjY4MzEsInN1YiI6IjY2OWZjYzNhZTMyZTg5NmQ2NjUyNzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgMNVys-dP0mtn9s8IuxhfWW5GjXC6Z2JiGZ9-ZzRBY",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCastById = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;

  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjg2ZDhlOWEwYzBhODRmODMxMGUzYWNiYjM1YmUyZCIsIm5iZiI6MTcyNDQyMDg4NS4zMjY4MzEsInN1YiI6IjY2OWZjYzNhZTMyZTg5NmQ2NjUyNzVhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgMNVys-dP0mtn9s8IuxhfWW5GjXC6Z2JiGZ9-ZzRBY",
    },
  };
  try {
    const res = await axios.get(url, options);
    return res.data.cast;
  } catch (err) {
    console.log(err);
  }
};

export default fetchMovies;
