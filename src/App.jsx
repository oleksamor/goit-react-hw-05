import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

// import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      {/* <MovieList /> */}
      {/* <NotFoundPage /> */}
    </div>
  );
}

export default App;
