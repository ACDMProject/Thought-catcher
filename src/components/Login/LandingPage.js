import React from "react";
import Login from "./Login";

function LandingPage() {
  return (
    <div className="container-fluid d-flex flex-column">
      <div className="row">
        <div className="col-lg-7 align-self-center">
          <img
            src="/images/tspCatchThoughtCrop.png"
            alt="catchThought"
            id="catchThought"
            className="img-fluid rounded mx-auto d-block"
          />
        </div>
        <div className="col-lg-4 align-self-center login-col">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
