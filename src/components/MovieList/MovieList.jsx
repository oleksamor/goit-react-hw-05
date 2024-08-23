import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
// import MoviesPage from "../../pages/MoviesPage/MoviesPage";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Movies Page</h2>
      <ul className={s.movielist}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
