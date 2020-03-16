import React, { Component } from "react";

export class Summary extends Component {
  continue = e => {
    e.preventDefault();
    //---DATA SHOULD BE SENT TO API HERE---//
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    //now we can use values & handleChange instead of this.props
    const {
      values: { emotion, intensity, moodLog, distortion, response }
    } = this.props;

    return (
      <div className="multiStep">
        <h3>Confirm Inputs</h3>
        <div className="form-row">
          <ul>
            <li> Emotion Selected: {emotion}</li>
            <li> Intensity Selected: {intensity}</li>
            <li> Associated Distortion: {distortion}</li>
            <li> Expansion on Mood: {moodLog}</li>
            <li> Rational Response: {response} </li>
          </ul>
        </div>
        <div className="form-row justify-content-between">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.back}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.continue}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Summary;
