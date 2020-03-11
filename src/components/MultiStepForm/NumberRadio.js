import React from "react";

function NumberRadio() {
  const { values, handleRadioChange } = this.props;

  return (
    <div className="container radios mt-4">
      <label htmlFor="intensityRadioBtn" className="mr-3">
        How intense is this feeling?
      </label>
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="intensity-check"
              value="intensity1"
              checked={values.intensity === "intensity1"}
              onChange={handleRadioChange}
              className="form-check-input"
            />
            1
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="intensity-check"
              value="instensity2"
              checked={values.intensity === "intensity2"}
              onChange={handleRadioChange}
              className="form-check-input"
            />
            2
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="intensity-check"
              value="intensity3"
              checked={values.intensity === "intensity3"}
              onChange={handleRadioChange}
              className="form-check-input"
            />
            3
          </label>
        </div>

        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NumberRadio;
