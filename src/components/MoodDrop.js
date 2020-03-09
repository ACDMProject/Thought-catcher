import React from "react";

function MoodDrop() {
  return (
    <div className="container drop">
      <h5 className="m-3">How are you feeling?</h5>
      <select class="form-control">
        <option>Happy</option>
        <option>Inspired</option>
        <option>Excited</option>
        <option>Neutral</option>
        <option>Anxious</option>
        <option>Exhausted</option>
        <option>Sad</option>
        <option>Overwhelmed</option>
        <option>Stressed</option>
        <option>Angry</option>
      </select>
    </div>
  );
}

export default MoodDrop;
