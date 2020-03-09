import React from "react";
import NumberRadio from "./NumberRadio";
import MoodDrop from "./MoodDrop";
import CognitiveDrop from "./CognitiveDrop";

function InputForm() {
  return (
    <div>
      <form className="form-group">
        <MoodDrop />
        <NumberRadio />
        <textarea
          className="form-control"
          id="textArea"
          rows="5"
          placeholder="Write a bit more about how you're feeling..."
        ></textarea>
        <CognitiveDrop />
        <textarea
          className="form-control m-3"
          id="textArea"
          rows="5"
          placeholder="Now try to rationally respond to this thought..."
        ></textarea>
        <button type="button" class="btn-outline-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;
