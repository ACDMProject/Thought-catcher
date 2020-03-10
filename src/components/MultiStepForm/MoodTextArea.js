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
      <form>
        <div className="form-group mt-3">
          <label htmlFor="moodTextArea">
            Write a bit more about how you're feeling...
          </label>
          <textarea
            className="form-control"
            id="moodTextArea"
            rows="4"
            value={values.moodLog}
            onChange={handleChange("moodLog")}
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

export default MoodTextArea;
