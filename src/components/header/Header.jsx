import React from "react";
import { DarkModeButton } from "./DarkModeButton";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1>Fake Store APP</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/electronics">Electronics</NavLink>
        <NavLink to="/jewelery">Jewelery</NavLink>
        <NavLink to="/men">Men's Clothing</NavLink>
        <NavLink to="/create">Create</NavLink>
        <DarkModeButton />
      </nav>
    </header>
  );
};
