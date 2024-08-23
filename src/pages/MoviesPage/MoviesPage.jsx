import React from "react";
import s from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import fetchMovies from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchMovies();
        setMovies(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
