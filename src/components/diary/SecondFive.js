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
					
					<PopoverBody> Disqualifying all the positives, and then coming up with several reasons why
            		the positive events in your life do not count.
					</PopoverBody>
				
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

					<PopoverBody> Believing that everything others say or do is some kind of direct,
           			 personal reaction to you. Often comparing yourself to others and
           			 taking things personally even when it was not meant that way.
					</PopoverBody>
				
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

					<PopoverBody> The belief that there are certain rules to follow about how someone ‘should be’ and 'ought to' behave, when
          			 Feelings of  either angry or guilty that you’ve failed, when these are not followed.
					</PopoverBody>

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
				
					<PopoverBody> Feeling a certain way and assuming that it is true. This may lead to
           			 ignoring rationality and logic when making assumptions.
					</PopoverBody>
				
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
					
					<PopoverBody>  The assignment of unhealthy label to yourself or others. This
           			 is a mixture of stereotyping and overgeneralisation.
					
					</PopoverBody>
				
				</UncontrolledPopover>
			
			</div>





			
		</React.Fragment>
	);
};

export default SecondFive;
