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
    const { values, handleChange } = this.props;

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
          Select your current mood:{" "}
        </label>
        <select
          className="custom-select"
          id="moodDropdown"
          onChange={handleChange("emotion")}
        >
          {emotionList}
        </select>

        <NumberRadio />

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

export default MoodSelect;
