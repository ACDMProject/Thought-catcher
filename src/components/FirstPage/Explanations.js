import React from "react";
import "./explanations.css";
import BlackAndWhite from "../BlackWhite.png";
import JumpingToConclusions from "../JumpingToConclusions.png";
import Overgeneralisation from "../Overgeneralisation.png";
import Shoulds from "../Shoulds.png";
import MentalFilter from "../MentalFilter.png";
import Personalisation from "../Personalisation.png";
import UniversalLabelling from "../UniversalLabelling.png";
import Catastrophisation from "../Catastrophisation.png";
import EmotionalReasoning from  "../EmotionalReasoning.png";
import Dim from "../Dim.png";


class Explanations extends React.Component {
  render() {
    return (
      <div className="container">
        <section id="one" className="wrapper-style-1">
          <h3>1. The 'Black and White' Mindset</h3>
          <h4>
            <div className="img1">
              <img src={BlackAndWhite} alt="First Mindset" />
            </div>
            You believe in one of the two extremes like failure or success and
            that there is no ‘grey’ areas.
          </h4>
          <h5>
            Example: although you passed your driving test, you had two minor
            faults and you feel like you failed because you did pass perfectly.
          </h5>
        </section>

        <section id="two" className="wrapper-style-2">
          <h3>2. Jumping to Conclusions</h3>

          <h4>
            <div className="img2">
              <img src={JumpingToConclusions} alt="Second Mindset" />{" "}
            </div>
            You make pessimistic interpretations or predictions without any
            supporting evidence. It’s like having a crystal ball that constantly
            tells you negative readings.
          </h4>

          <h5>
            Example: you’re wearing a shirt that makes you feel uncomfortable
            and feel like everyone is commenting on it behind your back, or you
            apply for a promotion that you are sure you won’t get.
          </h5>
        </section>

        <section id="three" className="wrapper-style-2">
          <h3>3. Overgeneralisation</h3>

          <h4>
            <div className="img1">
              <img
                src={Overgeneralisation}
                alt="Third Mindset"
                className="center"
              />
            </div>
            You come to a general conclusion based on a specific single
            incident. This creates an overview that you may choose to follow.
          </h4>

          <h5>
            {" "}
            Example: you fail an exam, conclude you’re a failure and decide if
            you should drop out.
          </h5>
        </section>

        <section id="four" className="wrapper-style-2">
          <h3>4. Catastrophisation</h3>

          <h4>
            <div className="img2">
              <img
                src={Catastrophisation}
                alt="Fourth Mindset"
                className="center"
              />
            </div>
            You view an unfavourable outcome to an event and then decide that if
            this outcome does happen, the results will be a disaster.
          </h4>

          <h5>
            Example: you feel like you fail when you try something new, so you
            believe that you will fail at everything you try that you don’t have
            any experience in.
          </h5>
        </section>

        <section id="five" className="wrapper-style-2">
          <h3>5. Mental Filter</h3>

          <h4>
            <div className="img1">
              <img
                src={MentalFilter}
                alt="Fifth Mindset"
                className="center"
              />
            </div>
            You take the negative details and magnify them while also filtering
            out all positives of a situation.
          </h4>
          <h5>
            {" "}
            Example: you’re a Youtuber and one of your videos attract loads of
            positive comments from your fans, however, you notice a bad comment
            and you only focus on that.{" "}
          </h5>
        </section>

        <section id="six" className="wrapper-style-2">
          <h3>6. Diminishing the Positives</h3>

          <h4>
            <div className="img2">
              <img
                src={Dim}
                alt="Sixth Mindset"
                className="center"
              />
            </div>
            You disqualify all the positives, coming up with several reasons why
            the positive events in your life do not count.
          </h4>

          <h5>
            Example: you believe you got ‘lucky’ and that is the reason why you
            got promoted, not because of your successes.{" "}
          </h5>
        </section>

        <section id="seven" className="wrapper-style-2">
          <h3>7. Personalisation</h3>

          <h4>
            <div className="img1">
              <img
                src={Personalisation}
                alt="Seventh Mindset"
                className="center"
              />
            </div>
            You believe that everything others say or do is some kind of direct,
            personal reaction to you. You often compare yourself to others and
            you take things personally even when it was not meant that way.
          </h4>

          <h5>
            Example: you’re having a retirement party and because your brother
            was late, you feel like this caused your guessed to not enjoy it.{" "}
          </h5>
        </section>

        <section id="eight" className="wrapper-style-2">
          <h3>8. Shoulds</h3>

          <h4>
            <div className="img2">
              <img src={Shoulds} alt="Eighth Mindset" className="center" />
            </div>
            You follow a bunch of rules about how someone ‘should’ behave, when
            you break one of these rules you feel either angry or guilty that
            you’ve failed.
          </h4>

          <h5>
            Example: you should eat healthy and that you shouldn’t eat any
            takeaways.{" "}
          </h5>
        </section>

        <section id="nine" className="wrapper-style-2">
          <h3>9. Emotional Reasoning</h3>

          <h4>
            <div className="img1">
              <img
                src={EmotionalReasoning}
                alt="Nineth Mindset"
                className="center"
              />
            </div>
            You feel a certain way and assume that it is true. This may lead to
            you ignoring rationality and logic when you make your assumptions.
          </h4>

          <h5>Example: You feel like a failure, so you must be a failure. </h5>
        </section>

        <section id="ten" className="wrapper-style-2">
          <h3>10. Universal Labelling</h3>

          <h4>
            <div className="img2">
              <img
                src={UniversalLabelling}
                alt="Tenth Mindset"
                className="center"
              />
            </div>
            Instead of describing a mistake in context of a particular
            situation, you assign an unhealthy label on yourself or others. This
            is a mixture of stereotyping and overgeneralisation.
          </h4>

          <h5>
            Example: you mislabel your colleague as ‘difficult and rude’ when
            you met him once at a company conference without bothering to
            understand any context around why.{" "}
          </h5>
        </section>
      </div>
    );
  }
}

export default Explanations;
