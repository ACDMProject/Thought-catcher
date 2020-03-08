import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "orange"
  };

  return (
    <nav className="navbar p-2">
      <a class="navbar-brand" href="/src/icons8-brain-100.png" style={navStyle}>
        Thought Catcher
      </a>
      <ul className="nav-links my-auto">
        <Link style={navStyle} to="/home2">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/inputs">
          <li>Inputs</li>
        </Link>
        <Link style={navStyle} to="/definitions">
          <li>Definitions</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
