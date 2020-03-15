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
      <React.Fragment>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="text-left mb-5">Sign up to thought catcher!</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control mb-4"
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
            Register{" "}
          </button>
          <div>
            Already registered?
            <button
              type="button"
              className="btn btn-sm btn-outline-primary m-2"
              onClick={e => setNewUser(true)}
            >
              Login
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }

  return <div className="Signup">{newUser === null ? signUp() : login()}</div>;
}
