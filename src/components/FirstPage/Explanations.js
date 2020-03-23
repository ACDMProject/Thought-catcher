import React from "react";
import BlackAndWhite from "./BlackWhite.png";
import JumpingToConclusions from "./JumpingToConclusions.png";
import Overgeneralisation from "./Overgeneralisation.png";
import Shoulds from "./Shoulds.png";
import MentalFilter from "./MentalFilter.png";
import Personalisation from "./Personalisation.png";
import UniversalLabelling from "./UniversalLabelling.png";
import Catastrophisation from "./Catastrophisation.png";
import EmotionalReasoning from  "./EmotionalReasoning.png";
import Dim from "./Dim.png";


class Explanations extends React.Component {
  render() {
    return (
      <div className="container">

        <section id="one" className="wrapper-style-1">
          <h5>1. All or Nothing</h5>
          <h6>
            <div className="img1">
              <img src={BlackAndWhite} alt="First Mindset" className= "center"/>
            </div>
            You believe in one of the two extremes like failure or success and
            that there is no ‘grey’ areas.
          </h6>
          <p>
            Example: you passed your driving test, however, you had two minor
            faults and you feel like you failed because you didn't pass perfectly.
          </p>
        </section>

        <hr className= "linestyle"></hr>

        <section id="two" className="wrapper-style-2">
          <h5>2. Jumping to Conclusions</h5>

          <h6>
            <div className="img2">
              <img src={JumpingToConclusions} alt="Second Mindset" className="center" />
            </div>
            You make pessimistic interpretations or predictions without any
            supporting evidence. It’s like having a crystal ball that constantly
            tells you negative readings.
          </h6>

          <p>
            Example: you’re wearing a shirt that makes you feel uncomfortable
            and so you may immediately assume that everyone is commenting on it behind your back.
          </p>
        </section>

        <hr></hr>


        <section id="three" className="wrapper-style-2">
          <h5>3. Overgeneralisation</h5>

          <h6>
            <div className="img1">
              <img
                src={Overgeneralisation}
                alt="Third Mindset"
                className="center"
              />
            </div>
            You come to a general conclusion based on a specific single
            incident. This may create a conclusion that you may choose to follow.
          </h6>

          <p>
            {" "}
            Example: you fail a college exam, conclude you’re a failure and decide if
            you should drop out.
          </p>
        </section>

        <hr></hr>


        <section id="four" className="wrapper-style-2">
          <h5>4. Catastrophising</h5>

          <h6>
            <div className="img2">
              <img
                src={Catastrophisation}
                alt="Fourth Mindset"
                className="center"
              />
            </div>
            You view an unfavourable outcome to an event and then decide that if
            this outcome does happen, the results will be a disaster.
          </h6>

          <p>
            Example: you feel like you fail when you try something new, so you
            believe you will fail at everything you try that you don’t have
            any experience in.
          </p>
        </section>

        <hr></hr>


        <section id="five" className="wrapper-style-2">
          <h5>5. Mental Filtering</h5>

          <h6>
            <div className="img1">
              <img
                src={MentalFilter}
                alt="Fifth Mindset"
                className="center"
              />
            </div>
            You take the negative details and magnify them while also filtering
            out all of the positives of a situation.
          </h6>
          <p>
            {" "}
            Example: you’re a Youtuber and one of your videos attract loads of
            positive comments from your fans, however, you notice a bad comment
            and you only focus on that.{" "}
          </p>
        </section>

        <hr></hr>


        <section id="six" className="wrapper-style-2">
          <h5>6. Disqualifying the Positive</h5>

          <h6>
            <div className="img2">
              <img
                src={Dim}
                alt="Sixth Mindset"
                className="center"
              />
            </div>
            You remove all the positives, coming up with several reasons why
            the positive events in your life do not count.
          </h6>

          <p>
            Example: you believe you got ‘lucky’ and that is the reason why you
            got promoted, not because of how hard you've worked throughout the year.{" "}
          </p>
        </section>

        <hr></hr>

        <section id="seven" className="wrapper-style-2">
          <h5>7. Personalisation</h5>

          <h6>
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
          </h6>

          <p>
            Example: you’re having a retirement party and because your brother
            was late, you feel like this caused your guests to not enjoy it.{" "}
          </p>
        </section>

        <hr></hr>


        <section id="eight" className="wrapper-style-2">
          <h5>8. Shoulds and Oughts</h5>

          <h6>
            <div className="img2">
              <img src={Shoulds} alt="Eighth Mindset" className="center" />
            </div>
            You follow a bunch of rules about how someone ‘should’ and ‘ought’ to behave, when
            you break one of these rules you feel either angry or guilty that
            you’ve failed.
          </h6>

          <p>
            Example: you should eat healthy and that you shouldn’t eat any
            takeaways, so when you do, you feel guilty for not following a healthy lifestyle.{" "}
          </p>
        </section>

        <hr></hr>


        <section id="nine" className="wrapper-style-2">
          <h5>9. Emotional Reasoning</h5>

          <h6>
            <div className="img1">
              <img
                src={EmotionalReasoning}
                alt="Nineth Mindset"
                className="center"
              />
            </div>
            You feel a certain way and assume that it is true. This may lead to
            you ignoring rationality and logic when you make your assumptions.
          </h6>

          <p>Example: You feel like a failure, so you must be a failure. </p>
        </section>

        <hr></hr>


        <section id="ten" className="wrapper-style-2">
          <h5>10. Labelling</h5>

          <h6>
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
          </h6>

          <p>
            Example: you mislabel your colleague as ‘difficult and rude’ when
            you met him once at a company conference without bothering to
            understand any context around why.{" "}
          </p>
        </section>


      </div>
    );
  }
}

export default Explanations;
