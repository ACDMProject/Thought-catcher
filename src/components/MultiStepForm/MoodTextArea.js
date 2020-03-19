import React from "react";

class MoodTextArea extends React.Component {
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
          <label className="mb-3" htmlFor="moodTextArea">
            Write a bit more about how you're feeling...
          </label>
          <textarea
            className="form-control"
            id="mood-text-area"
            rows="8"
            value={values.moodLog}
            onChange={handleChange("moodLog")}
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

export default MoodTextArea;
