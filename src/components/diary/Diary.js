import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import DistDiary from "./DistDiary";
import axios from "axios";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);
moment().format();

const circleColor = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

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
			selectedDay: undefined,
			data: [],
			filteredData: []
		};
	}

	// component life cycle method
	componentDidMount = () => {
		axios
			.get(
				"https://2xi4uzqzba.execute-api.eu-west-2.amazonaws.com/dev/Thoughts"
			)
			.then((response) => {
				var fullData = response.data.thoughts;
				//console.log(fullData);

				// add values which extract date and time from timestamp
				for (let i = 0; i < fullData.length; i++) {
					let thought = fullData[i];
					let date = moment.utc(thought.Timestamp).format("YYYY-MM-DD");
					let time = moment.utc(thought.Timestamp).format("HH:MM");
					thought.eventDate = date;
					thought.eventTime = time;
				}

				this.setState({
					data: fullData,
					filteredData: fullData
				});
			})

			.catch(function(error) {
				// handle error
				console.error(error);
			});
	};

	//modified so that when you click the selected date again, selectDay gets set to undefined
	//if statement in return method that toggles what's displayed
	handleDayClick = (day, { selected }) => {
		if (selected) {
			this.setState({ selectedDay: undefined });
			return;
		}
		this.setState({ selectedDay: day });

		///filter data to match the date selected
		let data = this.state.data;

		var dataToRender = [];
		data.forEach(function(entry) {
			let dayFormatted = moment(day).format("YYYY-MM-DD");
			if (entry.eventDate === dayFormatted) {
				dataToRender.push(entry);
			}
		});
		this.setState({ filteredData: dataToRender });
	};

	// get data from database and filter for day selected on calendar

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

				{this.state.filteredData.map((item, key) => (
					<div className="row">
						<strong>Mood: </strong>
						{item.Mood}
						<strong>Intensity: </strong>
						{item.Mood_intensity}
						<strong>Expansion on mood: </strong>
						{item.Thoughts}
						<strong>Distortion: </strong>
						{item.Distortion}
						<strong>Response: </strong>
						{item.Response}
					</div>
				))}
			</div>
		);
	}
}

export default Diary;
