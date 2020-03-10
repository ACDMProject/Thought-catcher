import React, { Component } from "react";
import MoodDrop from "./MoodDrop";

export class MasterForm extends Component {
  state = {
    step: 1,
    emotion: [
      { id: 1, name: "Happy" },
      { id: 2, name: "Excited" }
    ],
    intensity: "",
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

  //handle change within the fields
  handleChange = input => e => {
    //set 'input' to to value of the input field
    this.setState({ [input]: e.target.value });
    console.log(this.state.emotion);
  };

  render() {
    // const { step } = this.state;
    const { emotion, intensity, moodLog, distortion, response } = this.state;
    //we can pass the values into each component & render them in the inputs
    const values = { emotion, intensity, moodLog, distortion, response };
    // switch (step) {
    //   case 1:
    return (
      <MoodDrop
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
      />
    );
    //   case 2:
    //     return (
    //       <Form2
    //         nextStep={this.nextStep}
    //         prevStep={this.prevStep}
    //         handleChange={this.handleChange}
    //         values={values}
    //       />
    //     );
    //   case 3:
    //     return (
    //       <Confirm
    //         nextStep={this.nextStep}
    //         prevStep={this.prevStep}
    //         values={values}
    //       />
    //     );
    //   case 4:
    //     return <Success />;
  }
}

export default MasterForm;
