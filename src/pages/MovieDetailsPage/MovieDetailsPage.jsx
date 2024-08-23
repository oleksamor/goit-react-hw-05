import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchCastById(params.movieId).then((data) => setMovie(data));
  }, [params.movieId]);
  console.log("movie...", movie);
  return (
    <div>
      <p>Movie Details Page.... #{params.movieId}</p>
      {/* <h2>{movie.name}</h2> */}
    </div>
  );
};

export default MovieDetailsPage;
