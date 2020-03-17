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
      <form className="multiStep boxShadows">
        <div className="form-row">
          <label htmlFor="distortionTextArea">
            Write a rational response to yourself:
          </label>
          <textarea
            className="form-control"
            id="distortionTextArea"
            rows="8"
            value={values.response}
            onChange={handleChange("response")}
          ></textarea>
        </div>
        <div class="form-row justify-content-between mt-3">
          <button
            type="button"
            className="btn btn-outline-back"
            onClick={this.back}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-outline-next"
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
