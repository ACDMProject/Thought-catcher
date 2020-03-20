import React, { Component } from "react";
import FirstFive from "./FirstFive";
import SecondFive from "./SecondFive";

class DistDiary extends Component {
	render() {
		return (
			<div className="row">
				<div className="col justify-content-around">
					<FirstFive />
				</div>
			</div>
		);
	}
}

export default DistDiary;
