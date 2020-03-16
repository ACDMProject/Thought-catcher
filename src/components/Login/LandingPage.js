import React from "react";
import Login from "./Login";

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7">
          <img
            src="/images/tspCatchThoughtCrop.png"
            alt="catchThought"
            id="catchThought"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-5 loginCol">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
