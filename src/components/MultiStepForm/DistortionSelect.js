import React from "react";

class DistortionSelect extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    let distortionList =
      values.distortion.length > 0 &&
      values.distortion.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

    //need to retrieve intensity selected from radio button

    return (
      <form>
        <label htmlFor="cognitiveDropdown" className="mt-4">
          Can you associate this with a congnitive distortion?{" "}
        </label>
        <select className="custom-select" id="cognitiveDropdown">
          {distortionList}
        </select>

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

export default DistortionSelect;
