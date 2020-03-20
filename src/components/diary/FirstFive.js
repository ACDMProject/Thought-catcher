import React, { Component } from "react";
import { useState } from "react";
import {
	Button,
	UncontrolledPopover,
	PopoverHeader,
	PopoverBody
} from "reactstrap";

const FirstFive = (props) => {
	return (
		<React.Fragment>
			<div>
				
				<Button id="PopoverFocus1" type="button">
					All or nothing
				</Button>{" "}
				
				<UncontrolledPopover
					trigger="hover"
					placement="right"
					target="PopoverFocus1"
				>
					<PopoverHeader>All or nothing thinking</PopoverHeader>
					
					<PopoverBody>You believe in one of the two extremes,  failure or success, and
           				 that there is no ‘grey’ areas.
					</PopoverBody>
				
				</UncontrolledPopover>
				
			</div>


			<div>
				<Button id="PopoverFocus2" type="button">
					Jumping to Conclusions
				</Button>{" "}
				
				<UncontrolledPopover
					trigger="hover"
					placement="right"
					target="PopoverFocus2"
				>
					<PopoverHeader>Jumping to Conclusions</PopoverHeader>
					
					<PopoverBody>You make pessimistic interpretations or predictions without any
            			supporting evidence.
					</PopoverBody>
				
				</UncontrolledPopover>
			</div>



			<div>
				<Button id="PopoverFocus3" type="button">
					Overgeneralisation
				</Button>{" "}
			
				<UncontrolledPopover
					trigger="hover"
					placement="right"
					target="PopoverFocus3"
				>
					<PopoverHeader>Overgeneralisation</PopoverHeader>
					
					<PopoverBody> You come to a general conclusion based on a specific single
          			  incident. This creates an overview that you may choose to follow.
					</PopoverBody>
				
				</UncontrolledPopover>
			</div>

			<div>
				<Button id="PopoverFocus4" type="button">
					Catastrophising
				</Button>{" "}
			
				<UncontrolledPopover
					trigger="hover"
					placement="right"
					target="PopoverFocus4"
				>
					<PopoverHeader>Catastrophising</PopoverHeader>
					
					<PopoverBody> You view an unfavourable outcome to an event and then decide that if
            		this outcome does happen, the results will be a disaster.
					</PopoverBody>
				
				</UncontrolledPopover>
			</div>

			<div>
				<Button id="PopoverFocus5" type="button">
					Mental Filtering
				</Button>{" "}
				
				<UncontrolledPopover
					trigger="hover"
					placement="right"
					target="PopoverFocus5"
				>
					<PopoverHeader>Mental Filtering</PopoverHeader>
				
					<PopoverBody> You take the negative details and magnify them while also filtering
					out all positives of a situation.
					</PopoverBody>
				
				</UncontrolledPopover>
			</div>






		</React.Fragment>
	);
};

export default FirstFive;
