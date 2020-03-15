import React, { useState } from "react";
import Login from "./Login";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function login() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }

  function signUp() {
    return (
      <form
        className="justify-content-center loginForm"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter your first name..."
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="email">Last Name</label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter your last name..."
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Choose your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btnLogin btn-lg btn-block btn-primary"
          disabled={!validateForm()}
        >
          Login
        </button>
        <div>
          Already registered?{" "}
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={e => setNewUser(true)}
          >
            Login
          </button>
        </div>
      </form>
    );
  }

  return <div className="Signup">{newUser === null ? signUp() : login()}</div>;
}
