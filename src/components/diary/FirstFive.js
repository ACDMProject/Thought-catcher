import React, { Component } from "react";

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
					
					<PopoverBody>Believing in one of  two extremes,  failure or success, and
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
					
					<PopoverBody>Making pessimistic interpretations or predictions without any
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
					
					<PopoverBody> Coming to a general conclusion based on a specific single
          			  incident. 
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
					
					<PopoverBody> Viewing an unfavourable outcome to an event as a complete disaster.
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
				
					<PopoverBody> Taking negative details and magnifying them while also filtering
					out all positives of a situation.
					</PopoverBody>
				
				</UncontrolledPopover>
			</div>






		</React.Fragment>
	);
};

export default FirstFive;
