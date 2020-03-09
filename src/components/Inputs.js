import React from "react";
import InputForm from "./InputForm";

function Inputs() {
  return (
    <div className="container-fluid inputs">
      <h3 className="dummyHeader">
        Page for inputting mood/intensity/thoughts/category & response
      </h3>
      <div>
        <div className="row ">
          <div className="col-lg-5 ">
            <InputForm />
          </div>

          <div className="col-lg-7">
            <img
              src="/images/inputThought.png"
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
