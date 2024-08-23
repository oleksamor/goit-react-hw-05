import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.rout}>Routing</div>
      <nav>
        <ul className={s.nav}>
          <li className={s.link}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li className={s.link}>
            <NavLink className={buildLinkClass} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
