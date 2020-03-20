import React, { Component } from "react";
import { useState } from "react";
import {
	Button,
	UncontrolledPopover,
	PopoverHeader,
	PopoverBody
} from "reactstrap";

const SecondFive = (props) => {
	return (
		<React.Fragment>
			<div>
				<Button id="PopoverFocus6" type="button">
				Disqualifying the Positives
				</Button>{" "}
				<UncontrolledPopover
					trigger="hover"
					placement="left"
					target="PopoverFocus6"
				>
					<PopoverHeader>Disqualifying the Positives</PopoverHeader>
					<PopoverBody> You disqualify all the positives, coming up with several reasons why
            the positive events in your life do not count.</PopoverBody>
				</UncontrolledPopover>
			</div>


			<div>
				<Button id="PopoverFocus7" type="button">
				Personalisation
				</Button>{" "}
				<UncontrolledPopover
					trigger="hover"
					placement="left"
					target="PopoverFocus7"
				>
					<PopoverHeader>Personalisation</PopoverHeader>
					<PopoverBody> You believe that everything others say or do is some kind of direct,
            personal reaction to you. You often compare yourself to others and
            you take things personally even when it was not meant that way.</PopoverBody>
				</UncontrolledPopover>
			</div>



			<div>
				<Button id="PopoverFocus8" type="button">
				Shoulds & Oughts
				</Button>{" "}
				<UncontrolledPopover
					trigger="hover"
					placement="left"
					target="PopoverFocus8"
				>
					<PopoverHeader>Shoulds & Oughts</PopoverHeader>
					<PopoverBody> You follow a bunch of rules about how someone ‘should do’ and 'ought to' behave, when
            you break one of these rules you feel either angry or guilty that
            you’ve failed.</PopoverBody>
				</UncontrolledPopover>
			</div>

			<div>
				<Button id="PopoverFocus9" type="button">
				Emotional Reasoning
				</Button>{" "}
				<UncontrolledPopover
					trigger="hover"
					placement="left"
					target="PopoverFocus9"
				>
					<PopoverHeader>Emotional Reasoning</PopoverHeader>
					<PopoverBody> You feel a certain way and assume that it is true. This may lead to
            you ignoring rationality and logic when you make your assumptions.</PopoverBody>
				</UncontrolledPopover>
			</div>

			<div>
				<Button id="PopoverFocus10" type="button">
				Labelling
				</Button>{" "}
				<UncontrolledPopover
					trigger="hover"
					placement="left"
					target="PopoverFocus10"
				>
					<PopoverHeader>Labelling</PopoverHeader>
					<PopoverBody>  Instead of describing a mistake in context of a particular
            situation, you assign an unhealthy label on yourself or others. This
            is a mixture of stereotyping and overgeneralisation.</PopoverBody>
				</UncontrolledPopover>
			</div>





			
		</React.Fragment>
	);
};

export default SecondFive;
