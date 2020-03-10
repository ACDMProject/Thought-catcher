import React from "react";

function NumberRadio() {
  return (
    <div className="container radios mt-4">
      <label htmlFor="intensityRadioBtn" className="mr-3">
        How intense is this feeling?
      </label>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary active">
          <input
            type="radio"
            name="option1"
            id="intensityRadioBtn"
            autoComplete="off"
            defaultChecked
          />{" "}
          1
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="option2"
            id="intensityRadioBtn"
            autoComplete="off"
          />{" "}
          2
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="option3"
            id="intensityRadioBtn"
            autoComplete="off"
          />{" "}
          3
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="option4"
            id="intensityRadioBtn"
            autoComplete="off"
          />{" "}
          4
        </label>
        <label className="btn btn-secondary">
          <input
            type="radio"
            name="option5"
            id="intensityRadioBtn"
            autoComplete="off"
          />{" "}
          5
        </label>
      </div>
    </div>
  );
}

export default NumberRadio;
