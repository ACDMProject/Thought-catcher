import React from "react";
import NumberRadio from "./NumberRadio";
import MoodDrop from "./MoodDrop";
import CognitiveDrop from "./CognitiveDrop";

function Inputs() {
  return (
    <div className="container Inputs">
      <h3>Page for inputting mood/intensity/thoughts/category & response</h3>
      <div>
        <div className="row">
          <div className="col-7">
            <form className="form-group">
              <MoodDrop />
              <NumberRadio />
              <textarea
                className="form-control"
                id="textArea"
                rows="3"
                placeholder="Write a bit more about how you're feeling..."
              ></textarea>
              <CognitiveDrop />
              <textarea
                className="form-control m-3"
                id="textArea"
                rows="3"
                placeholder="Now try to rationally respond to this thought..."
              ></textarea>
              <button type="button" class="btn-outline-secondary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
