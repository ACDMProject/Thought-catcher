import React from "react";

function MoodRadio() {
  return (
    <div className="container Radios">
      <h5 className="m-3">How are you feeling today?</h5>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />{" "}
          Inspired
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />{" "}
          Excited
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />{" "}
          Happy
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Neutral
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Anxious
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Sad
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Exhausted
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Overwhelmed
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Stressed
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />{" "}
          Angry
        </label>
      </div>
    </div>
  );
}

export default MoodRadio;
