import React from "react";
import NumberRadio from "./NumberRadio";

const emotions = [
  { id: 1, name: "Happy" },
  { id: 2, name: "Excited" },
  { id: 3, name: "Inspired" },
  { id: 4, name: "Calm" },
  { id: 5, name: "Netural" },
  { id: 6, name: "Stressed" },
  { id: 7, name: "Anxious" },
  { id: 8, name: "Sad" },
  { id: 9, name: "Angry" },
  { id: 10, name: "Overwhelmed" }
];

class MoodSelect extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleRadioChange } = this.props;

    let emotionList = emotions.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    }, this);

    //need to retrieve intensity selected from radio button

    return (
      <form>
        <label htmlFor="moodDropdown" className="mt-4">
          Select your current mood:
        </label>
        <select
          className="custom-select"
          id="moodDropdown"
          onChange={handleChange("emotion")}
        >
          {emotionList}
        </select>

        <div className="btn-group btn-group-toggle form-check">
          <label className="btn btn-secondary active">
            <input
              type="radio"
              name="options"
              value="option1"
              checked={values.selectedIntensity === "option1"}
              onChange={handleRadioChange}
            />
            1
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              value="option2"
              checked={values.selectedIntensity === "option2"}
              onChange={handleRadioChange}
            />{" "}
            2
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              value="option3"
              checked={values.selectedIntensity === "option3"}
              onChange={handleRadioChange}
            />{" "}
            3
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              value="option4"
              checked={values.selectedIntensity === "option4"}
              onChange={handleRadioChange}
            />{" "}
            4
          </label>
          <label className="btn btn-secondary">
            <input
              type="radio"
              name="options"
              value="option5"
              checked={values.selectedIntensity === "option5"}
              onChange={handleRadioChange}
            />{" "}
            5
          </label>

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.continue}
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}

// <NumberRadio onChange={handleChange} values={values} />

export default MoodSelect;
