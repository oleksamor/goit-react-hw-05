import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

// import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/MovieList" element={<h2>Movies Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;
