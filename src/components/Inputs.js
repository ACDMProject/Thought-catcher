import React from "react";
import MasterForm from "./MultiStepForm/MasterForm";

function Inputs() {
  return (
    <div className="container-fluid inputs">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-lg-5 ">
          <h3 className="mt-5 mb-4">Mood Scriber </h3>
          <MasterForm />
        </div>

        <div className="col-lg-5 mt-5">
          <img
            src="/images/3366283.png"
            alt="catchThought"
            id="catchThought"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Inputs;
