import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import Loader from "../../components/Loader/Loader.jsx";
import s from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchCastById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);
  if (!movie) {
    <Loader />;
    return;
  }
  return (
    <div>
      <p>Movie Details Page.... #{params.movieId}</p>
      {/* console.log("movie.name...", movie.title); */}
      {/* <h2>alalalalal{movie.title}</h2> */}

      <div className={s.headlinks}>
        <h3>Additional information</h3>
        <div className={s.links}>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
