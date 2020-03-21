import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "./Login";
import uuidv4 from "uuid/v4";
import axios from "axios";

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

  const history = useHistory();
  function submit() {
    //variable to be sent
    const loginToAdd = {
      userId: uuidv4(),
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };
    /// connect to backend
    axios
      .post(
        "https://2xi4uzqzba.execute-api.eu-west-2.amazonaws.com/dev/Users",
        loginToAdd
      )
      // handle success
      .then(response => {
        history.push("/home");
      })
      // handle error
      .catch(error => {
        console.error(error);
      });
  }

  return newUser === null ? (
    <form className="loginForm" onSubmit={handleSubmit}>
      <p className="headers text-sm-center text-lg-left">
        Sign up to thought catcher!
      </p>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="firstName">First Name</label>
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
      <div className="form-row justify-content-sm-center justify-content-lg-start">
        <button
          type="submit"
          className="btn btnLogin btn-lg btn-block btn-shape"
          disabled={!validateForm()}
          onClick={submit}
        >
          Register{" "}
        </button>
      </div>
      <div className="form-row form-inline mt-3 justify-content-sm-center justify-content-lg-start">
        {" "}
        Already registered?
        <button
          type="button"
          className="btn btn-md btn-simple p-0 m-1"
          onClick={e => setNewUser(false)}
        >
          Login
        </button>
      </div>
    </form>
  ) : (
    <Login />
  );
}
