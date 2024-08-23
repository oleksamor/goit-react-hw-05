import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MovieList">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
