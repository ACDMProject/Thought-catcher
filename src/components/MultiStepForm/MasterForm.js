import React, { Component } from "react";
import MoodSelect from "./MoodSelect";
import MoodTextArea from "./MoodTextArea";
import DistortionSelect from "./DistortionSelect";
import DistortionTextArea from "./DistortionTextArea";
import Summary from "./Summary";
import Success from "./Success";
import uuidv4 from "uuid/v4";
import axios from "axios";

class MasterForm extends Component {
  state = {
    step: 1,
    emotion: "",
    selectedIntensity: "",
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

  //function to send to database
  submit = () => {
    //variable to be sent
    const thoughtToLog = {
      uuid: uuidv4(),
      Mood: this.state.emotion,
      Thoughts: this.state.moodLog,
      Distortion: this.state.distortion,
      Response: this.state.response,
      Mood_intensity: this.state.selectedIntensity
    };

    /// connect to backend
    axios
      .post(
        "https://2xi4uzqzba.execute-api.eu-west-2.amazonaws.com/dev/Thoughts",
        thoughtToLog
      )
      // handle success
      .then(response => {
        // Get current list
        const newThoughts = this.state.thoughts;
        // Add the new log to the array by pushing
        newThoughts.push(thoughtToLog);
        // Update state
        this.setState({
          thoughts: newThoughts
        });
      })
      // handle error
      .catch(error => {
        console.error(error);
      });

    // go to success page
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  handleRadioChange = e => {
    this.setState({ selectedIntensity: +e.target.value });
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
            submit={this.submit}
            values={values}
          />
        );
      case 6:
        return <Success />;
      default:
    }
  }
}

export default MasterForm;
