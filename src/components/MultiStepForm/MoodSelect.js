import React from "react";
// import NumberRadio from "./NumberRadio";

const emotions = [
  { id: 1, name: "Happy" },
  { id: 2, name: "Excited" },
  { id: 3, name: "Inspired" },
  { id: 4, name: "Calm" },
  { id: 5, name: "Neutral" },
  { id: 6, name: "Stressed" },
  { id: 7, name: "Anxious" },
  { id: 8, name: "Sad" },
  { id: 9, name: "Angry" },
  { id: 10, name: "Overwhelmed" },
  { id: 11, name: "Exhausted" }
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
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      );
    }, this);

    //need to retrieve intensity selected from radio button

    return (
      <form className="multiStep">
        <div className="form-row form-group">
          <label htmlFor="moodDropdown">Select your current mood:</label>
          <select
            className="custom-select"
            id="moodDropdown"
            onChange={handleChange("emotion")}
          >
            {emotionList}
          </select>
        </div>
        <div className="form-row form-inline mt-4">
          <label htmlFor="options">Select the intensity:</label>
          <div className="ml-2 btn-group btn-group-toggle form-check">
            <label
              className={
                values.selectedIntensity === "1"
                  ? "btn btn-secondary active"
                  : "btn btn-secondary"
              }
            >
              <input
                type="radio"
                name="options"
                value="1"
                checked={values.selectedIntensity === "1"}
                onChange={handleRadioChange}
              />
              1
            </label>
            <label
              className={
                values.selectedIntensity === "2"
                  ? "btn btn-secondary active"
                  : "btn btn-secondary"
              }
            >
              {" "}
              <input
                type="radio"
                name="options"
                value="2"
                checked={values.selectedIntensity === "2"}
                onChange={handleRadioChange}
              />{" "}
              2
            </label>
            <label
              className={
                values.selectedIntensity === "3"
                  ? "btn btn-secondary active"
                  : "btn btn-secondary"
              }
            >
              {" "}
              <input
                type="radio"
                name="options"
                value="3"
                checked={values.selectedIntensity === "3"}
                onChange={handleRadioChange}
              />{" "}
              3
            </label>
            <label
              className={
                values.selectedIntensity === "4"
                  ? "btn btn-secondary active"
                  : "btn btn-secondary"
              }
            >
              {" "}
              <input
                type="radio"
                name="options"
                value="4"
                checked={values.selectedIntensity === "4"}
                onChange={handleRadioChange}
              />{" "}
              4
            </label>
            <label
              className={
                values.selectedIntensity === "5"
                  ? "btn btn-secondary active"
                  : "btn btn-secondary"
              }
            >
              {" "}
              <input
                type="radio"
                name="options"
                value="5"
                checked={values.selectedIntensity === "5"}
                onChange={handleRadioChange}
              />{" "}
              5
            </label>
          </div>
        </div>
        <div class="form-row justify-content-end mt-3">
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
