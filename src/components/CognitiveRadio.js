import React from "react";

function CognitiveRadio() {
  return (
    <div className="container Radios">
      <h5 className="m-3">Can you identify this distortion?</h5>
      <select class="form-control">
        <option>All or Nothing</option>
        <option>Jumping to Conclusions</option>
        <option>Overgeneralisation</option>
        <option>Catastrophising</option>
        <option>Mental filtering</option>
        <option>Disqualifying the Positive</option>
        <option>Personalisation</option>
        <option>Shoulds and Oughts</option>
        <option>Emotional Reasoning</option>
        <option>Labelling</option>
      </select>
    </div>
  );
}

export default CognitiveRadio;
