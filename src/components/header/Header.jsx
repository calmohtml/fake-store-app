import React from "react";
import { DarkModeButton } from "./DarkModeButton";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__title">
          <NavLink to="https://calmohtml.github.io/fake-store-app">
            <h1>Store</h1>
          </NavLink>
        </div>
        <ul className="nav__links">
          <li className="nav__item">
            <NavLink to="/electronics">Electronics</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/jewelery">Jewelery</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/men">Men</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/create">Create</NavLink>
          </li>
        </ul>
        <div className="handle__dark--mode">
          <DarkModeButton />
        </div>
      </nav>
    </header>
  );
};
