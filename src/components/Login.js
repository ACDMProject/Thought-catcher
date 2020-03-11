import React from "react";

function Login() {
  return (
    <form className="justify-content-center loginForm">
      <h2 className="loginHead mb-5">Let's catch some thoughts!</h2>
      <div className="form-group">
        <label htmlFor="emailHome">Email address</label>
        <input
          type="email"
          className="form-control"
          id="emailHome"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="passwordHome"
          placeholder="Choose your password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="btn btnLogin btn-lg btn-block btn-primary"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
