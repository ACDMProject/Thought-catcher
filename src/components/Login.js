import React from "react";

function Login() {
  return (
    <form className="justify-content-center loginForm">
      <h2 className="loginHead mb-5">Let's catch some thoughts!</h2>
      <div class="form-group">
        <label for="emailHome">Email address</label>
        <input
          type="email"
          class="form-control"
          id="emailHome"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordHome"
          placeholder="Choose your password"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btnLogin btn-lg btn-block btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;
