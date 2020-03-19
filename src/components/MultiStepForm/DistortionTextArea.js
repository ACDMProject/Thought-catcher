import React from "react";

class DistortionTextArea extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <form className="multiStep">
        <div className="form-row">
          <label className="mb-3" htmlFor="distortionTextArea">
            Write a rational response to yourself:
          </label>
          <textarea
            className="form-control shadow-sm"
            id="dist-text-area"
            rows="8"
            value={values.response}
            onChange={handleChange("response")}
          ></textarea>
        </div>
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
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default DistortionTextArea;
