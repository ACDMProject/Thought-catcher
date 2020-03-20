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
					placement="bottom"
					target="PopoverFocus1"
				>
					<PopoverHeader>All or nothing thinking</PopoverHeader>
					<PopoverBody>Text on all or nothing</PopoverBody>
				</UncontrolledPopover>
			</div>
			<div>
				<Button id="PopoverFocus2" type="button">
					All or nothing
				</Button>{" "}
				<UncontrolledPopover
					trigger="focus"
					placement="bottom"
					target="PopoverFocus2"
				>
					<PopoverHeader>All or nothing thinking</PopoverHeader>
					<PopoverBody>Text on something else</PopoverBody>
				</UncontrolledPopover>
			</div>
		</React.Fragment>
	);
};

export default FirstFive;
