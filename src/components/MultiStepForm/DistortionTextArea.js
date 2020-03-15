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
        <div className="form-group mt-3">
          <label htmlFor="distortionTextArea">
            Write a rational response to yourself:
          </label>
          <textarea
            className="form-control"
            id="distortionTextArea"
            rows="4"
            value={values.response}
            onChange={handleChange("response")}
          ></textarea>
        </div>
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
          Next
        </button>
      </form>
    );
  }
}

export default DistortionTextArea;
