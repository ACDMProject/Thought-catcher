import React, { Component } from "react";
import MoodSelect from "./MoodSelect";
import MoodTextArea from "./MoodTextArea";
import DistortionSelect from "./DistortionSelect";
import DistortionTextArea from "./DistortionTextArea";
import Summary from "./Summary";

class MasterForm extends Component {
  state = {
    step: 1,
    emotion: [
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
    ],
    intensity: "",
    moodLog: "",
    distortion: [
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
    ],
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

  //handle change within the fields
  handleChange = input => e => {
    //set 'input' to to value of the input field
    this.setState({ [input]: e.target.value });
    console.log(this.state.emotion);
  };

  render() {
    const { step } = this.state;
    const { emotion, intensity, moodLog, distortion, response } = this.state;
    //we can pass the values into each component & render them in the inputs
    const values = { emotion, intensity, moodLog, distortion, response };

    switch (step) {
      case 1:
        return (
          <MoodSelect
            nextStep={this.nextStep}
            handleChange={this.handleChange}
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
