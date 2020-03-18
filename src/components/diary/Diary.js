import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import DistDiary from "./DistDiary";

const circleColor = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

/// comment for test for merge

const dummyData = (
	<div className="border border-light">
		<h6>
			<u>DD/MM/YY</u>
			<br /> <strong>Mood:</strong> Happy
			<br />
			<strong>Intensity:</strong> 3
			<br />
			<strong>Expansion on Mood:</strong> No problems today, feeling very
			positive.
			<br />
			<strong>Distortion: </strong>None
			<br />
			<strong>Response: </strong> N/A
		</h6>
	</div>
);

export class Diary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDay: undefined
		};
	}

	//modified so that when you click the selected date again, selectDay gets set to undefined
	//if statement in return method that toggles what's displayed
	handleDayClick = (day, { selected }) => {
		if (selected) {
			this.setState({ selectedDay: undefined });
			return;
		}
		this.setState({ selectedDay: day });
	};

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-4 Diary">
						<h3>This is the Diary Page</h3>
						<style>{circleColor} </style>

						<DayPicker
							onDayClick={this.handleDayClick}
							selectedDays={this.state.selectedDay}
							className="mt-3"
						/>
						{this.state.selectedDay ? (
							<p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
						) : (
							<p>Please select a day.</p>
						)}
					</div>
					<div className="col-8">
						<DistDiary />
					</div>
				</div>
				<div className="row">{dummyData}</div>
			</div>
		);
	}
}

export default Diary;
