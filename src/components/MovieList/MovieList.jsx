import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <NavLink
            className={s.link}
            to={`/movies/${movie.id}`}
            state={location}
          >
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />{" "}
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
