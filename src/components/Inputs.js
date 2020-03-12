import React from "react";
import MasterForm from "./MultiStepForm/MasterForm";

function Inputs() {
  return (
    <div className="container-fluid inputs">
      <h3 className="dummyHeader">
        Page for inputting mood/intensity/thoughts/category & response
      </h3>
      <div>
        <div className="row ">
          <div className="col-lg-5 ">
            <MasterForm />
          </div>

          <div className="col-lg-7">
            <img
              src="/images/2911196 (1).png"
              alt="catchThought"
              id="catchThought"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
