import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <a href="/top-wear" className="topmenu">Top Wear</a>
        <a href="/bottom-wear" className="topmenu">Bottom Wear</a>
        <a href="/mens-wear" className="topmenu">Mens Wear</a>
        <a href="/ladies-wear" className="topmenu">Ladies Wear</a>
      </nav>
    </div>
  );
};
export default Navbar;
