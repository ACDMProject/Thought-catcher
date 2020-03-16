import React, { useState } from "react";
import Register from "./Register";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function registerForm() {
    return (
      <React.Fragment>
        <Register />
      </React.Fragment>
    );
  }
  function loginForm() {
    return (
      <React.Fragment>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="text-left mb-5">Let's catch some thoughts!</h2>
          <div className="form-group">
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
              autoComplete="false"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMeCheckbox"
            />
            <label className="form-check-label" htmlFor="rememberMeCheckbox">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btnLogin btn-lg btn-block btn-shape"
            disabled={!validateForm()}
          >
            Login
          </button>
          <div className="form-row form-inline mt-3">
            Not yet registered?{" "}
            <button
              type="button"
              className="btn btn-md btn-simple p-0 m-1"
              onClick={e => setNewUser(true)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }

  return (
    <div className="Signup">
      {newUser === null ? loginForm() : registerForm()}
    </div>
  );
}
