import React from "react";
import NumberRadio from "./NumberRadio";

class MoodSelect extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    let emotionList =
      values.emotion.length > 0 &&
      values.emotion.map((item, i) => {
        return (
          <option key={i} value={item.id}>
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
        <select className="custom-select" id="moodDropdown">
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
