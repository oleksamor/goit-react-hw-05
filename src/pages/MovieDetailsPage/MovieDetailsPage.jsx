import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import Loader from "../../components/Loader/Loader.jsx";

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
  console.log("movie------> ", movie);
  return (
    <div>
      <p>Movie Details Page.... #{params.movieId}</p>
      {/* console.log("movie.name...", movie.title); */}
      <h2>alalalalal{movie.title}</h2>
    </div>
  );
};

export default MovieDetailsPage;
