import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    try {
      const getData = async () => {
        const data = await fetchTrendingMovies();
        setMovies(data);
      };
      getData;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
    </div>
  );
};

export default HomePage;
