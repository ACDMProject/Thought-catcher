import React from "react";
import Login from "./Login";

function LandingPage() {
  return (
    <div className="container-fluid login-container">
      <div className="row">
        <div className="col-7">
          <img
            src="/images/tspCatchThoughtCrop.png"
            alt="catchThought"
            id="catchThought"
            className="img-fluid"
          />
        </div>
        <div className="col-4 loginCol">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
