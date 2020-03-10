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
      <div>
        <h1>Confirm Inputs</h1>
        <ul>
          <li> Emotion Selected: {emotion}></li>
          <li> Intensity Selected: {intensity}></li>
          <li> Expansion on Mood: {moodLog}></li>
          <li> Associated Distortion: {distortion}></li>
          <li> Rational Response: {response} </li>
        </ul>
        <br />
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
    );
  }
}

export default Summary;
