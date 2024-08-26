import React from "react";
import s from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import fetchMovies from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("query") ?? "";

  const onSubmit = (newValue) => {
    if (newValue.trim() === "") return;
    setSearchParams({ query: newValue });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovies(filterValue);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [filterValue]);
  return (
    <div className={s.list}>
      <SearchBar filterValue={filterValue} onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
