import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

function Nav() {
  const navStyle = {
    color: "orange"
  };

  return (
    <nav className="navbar p-2 ml-5">
      <a class="navbar-brand" href="/">
        <img
          src={Logo}
          width="150"
          class="d-inline-block align-top"
          alt="logo Thought Catcher"
        />
      </a>
      <ul className="nav-links my-auto mr-5">
        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/diary">
          <li>Diary</li>
        </Link>
        <Link style={navStyle} to="/definitions">
          <li>Definitions</li>
        </Link>
        <Link style={navStyle} to="/moodscriber">
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
