import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "orange"
  };

  return (
    <nav className="navbar p-2">
      <a className="navbar-brand" href="/" style={navStyle}>
        Thought Catcher
      </a>
      <ul className="nav-links my-auto">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/definitions">
          <li>Definitions</li>
        </Link>
        <Link style={navStyle} to="/inputs">
          <li>Mood Scriber</li>
        </Link>
        <Link style={navStyle} to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link style={navStyle} to="/">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
