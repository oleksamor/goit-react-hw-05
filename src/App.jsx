import { useState } from "react";
import "./App.css";
// import { Routes, Route, NavLink } from "react-router-dom";
// import clsx from "clsx";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import NotFound from "./pages/NotFound";
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
} from "history";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

export default App;
