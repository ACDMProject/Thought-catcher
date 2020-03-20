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
		<div>
			<Button id="PopoverFocus" type="button">
				Jumping to conclusions
			</Button>{" "}
			<UncontrolledPopover
				trigger="focus"
				placement="bottom"
				target="PopoverFocus"
			>
				<PopoverHeader>Jumping to conclusions</PopoverHeader>
				<PopoverBody>Text on jumping to conclusions</PopoverBody>
			</UncontrolledPopover>
		</div>
	);
};

export default SecondFive;
