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
					trigger="focus"
					placement="left"
					target="PopoverFocus1"
				>
					<PopoverHeader>All or nothing thinking</PopoverHeader>
					<PopoverBody>You believe in one of the two extremes,  failure or success, and
           				 that there is no ‘grey’ areas.</PopoverBody>
				</UncontrolledPopover>
			</div>


			<div>
				<Button id="PopoverFocus2" type="button">
				Jumping to Conclusions
				</Button>{" "}
				<UncontrolledPopover
					trigger="focus"
					placement="bottom"
					target="PopoverFocus2"
				>
					<PopoverHeader>Jumping to Conclusions</PopoverHeader>
					<PopoverBody>You make pessimistic interpretations or predictions without any
            			supporting evidence.</PopoverBody>
				</UncontrolledPopover>
			</div>











			
		</React.Fragment>
	);
};

export default FirstFive;
