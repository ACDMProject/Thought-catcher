import React from "react";
import NumberRadio from "./NumberRadio";
import MoodRadio from "./MoodRadio";
import CognitiveRadio from "./CognitiveRadio";

function Inputs() {
  return (
    <div className="container Inputs">
      <h3>Page for inputting mood/intensity/thoughts/category & response</h3>
      <div>
        <form className="form-group">
          <MoodRadio />
          <NumberRadio />
          <label for="moodTextArea"></label>
          <textarea
            className="form-control"
            id="moodTextArea"
            rows="3"
            placeholder="Write a bit more about how you're feeling..."
          ></textarea>
          <CognitiveRadio />
          <textarea
            className="form-control m-3"
            id="response"
            rows="3"
            placeholder="Now try to rationally respond to this thought..."
          ></textarea>
          <button type="button" class="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inputs;
