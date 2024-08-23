import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.nav}>
          <li>Home</li>
          <li>Movies</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
