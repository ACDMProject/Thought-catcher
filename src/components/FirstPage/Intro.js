import React from "react";
import "./intro.css";

class Intro extends React.Component {
  render() {
    return (
      <div class="container">
        <h1 class="title">Cognitive Distortions</h1>

        <h2>Have you ever convinced yourself of something that isn’t true?</h2>
        <h2>
          Ever made excuses about yourself that stopped your growth and
          development in life?
        </h2>

        <p>
          {" "}
          If so, it is important to understand cognitive distortion and what
          category you fall under. You may even fall under more than one! So
          what is it? Cognitive distortions are inaccurate thoughts which are
          used to strengthen negative thinking.
        </p>

        <h2>Let Thought Catcher help you embark in this new journey.</h2>

        <p>There are ten cognitive distortions that you should understand:</p>
      </div>
    );
  }
}

export default Intro;
