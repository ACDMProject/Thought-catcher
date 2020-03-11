import React, { Component } from "react";
import MoodSelect from "./MoodSelect";
import MoodTextArea from "./MoodTextArea";
import DistortionSelect from "./DistortionSelect";
import DistortionTextArea from "./DistortionTextArea";
import Summary from "./Summary";

class MasterForm extends Component {
  state = {
    step: 1,
    emotion: "",
    selectedIntensity: "option1",
    moodLog: "",
    distortion: "",
    response: ""
  };

  //proceed to the next step
  nextStep = () => {
    //destructuring - pulling out step and storing it in a variable
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //go to the previous step
  prevStep = () => {
    //destructuring - pulling out step and storing it in a variable
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleRadioChange = e => {
    this.setState({ selectedIntensity: e.target.value });
    console.log(this.state.selectedIntensity);
  };

  //handle change within the fields
  handleChange = input => e => {
    //set 'input' to to value of the input field
    this.setState({ [input]: e.target.value });
    console.log(this.state.emotion);
  };

  render() {
    const { step } = this.state;
    const {
      emotion,
      selectedIntensity,
      moodLog,
      distortion,
      response
    } = this.state;
    //we can pass the values into each component & render them in the inputs
    const values = {
      emotion,
      selectedIntensity,
      moodLog,
      distortion,
      response
    };

    switch (step) {
      case 1:
        return (
          <MoodSelect
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleRadioChange={this.handleRadioChange}
            values={values}
          />
        );
      case 2:
        return (
          <MoodTextArea
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <DistortionSelect
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <DistortionTextArea
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Summary
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
    }
  }
}

export default MasterForm;
