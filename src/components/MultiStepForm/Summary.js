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
      values: { emotion, selectedIntensity, moodLog, distortion, response }
    } = this.props;

    return (
      <div className="multiStep">
        <form>
          <h5>
            <u>Confirm:</u>
          </h5>
          <ul className="list-weight">
            <li>
              <b>Emotion Selected:</b> {emotion}
            </li>
            <li>
              {" "}
              <b>Intensity Selected:</b> {selectedIntensity}
            </li>
            <li>
              {" "}
              <b>Expansion on Mood:</b> {moodLog}
            </li>
            <li>
              {" "}
              <b>Associated Distortion:</b> {distortion}
            </li>
            <li>
              {" "}
              <b>Rational Response:</b> {response}
            </li>
          </ul>
          <br />
          <div className="form-row">
            <div class="form-row">
              <button
                type="button"
                className="btn btn-outline-back btn-row-back"
                onClick={this.back}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-outline-next btn-row-next"
                onClick={this.continue}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Summary;
