import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <a class="navbar-brand" href="/src/icons8-brain-100.png">
        Thought Catcher
      </a>
      <ul className="nav-links my-auto">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/definitions">
          <li>Definitions</li>
        </Link>
        <Link style={navStyle} to="/inputs">
          <li>Inputs</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
