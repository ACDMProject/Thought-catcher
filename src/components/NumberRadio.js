import React from "react";

function NumberRadio() {
  return (
    <div className="radios">
      <h5 className="m-3">How intense is this feeling?</h5>
      <div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />{" "}
          1
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />{" "}
          2
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          3
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          4
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          5
        </label>
      </div>
    </div>
  );
}

export default NumberRadio;
