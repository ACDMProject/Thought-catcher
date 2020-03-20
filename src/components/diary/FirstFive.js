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
		<div>
			<Button id="PopoverFocus" type="button">
				All or nothing
			</Button>{" "}
			<UncontrolledPopover
				trigger="focus"
				placement="bottom"
				target="PopoverFocus"
			>
				<PopoverHeader>All or nothing thinking</PopoverHeader>
				<PopoverBody>Text on all or nothing</PopoverBody>
			</UncontrolledPopover>
		</div>
	);
};

export default FirstFive;
