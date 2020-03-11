import React from "react";

const distortions = [
  { id: 1, name: "All or Nothing" },
  { id: 2, name: "Jumping to Conclusions" },
  { id: 3, name: "Overgeneralisation" },
  { id: 4, name: "Catastrophising" },
  { id: 5, name: "Mental Filtering" },
  { id: 6, name: "Disqualifying the Positive" },
  { id: 7, name: "Personalisation" },
  { id: 8, name: "Shoulds & Oughts" },
  { id: 9, name: "Emotional Reasoning" },
  { id: 10, name: "Labelling" },
  { id: 11, name: "Unsure" }
];

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
    const { handleChange } = this.props;

    let distortionList = distortions.map(item => {
      return (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    }, this);
    //need to retrieve intensity selected from radio button

    return (
      <form>
        <label htmlFor="cognitiveDropdown" className="mt-4">
          Can you associate this with a congnitive distortion?
        </label>
        <select
          className="custom-select"
          id="cognitiveDropdown"
          onChange={handleChange("distortion")}
        >
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
