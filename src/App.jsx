import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          {/* <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} /> */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
