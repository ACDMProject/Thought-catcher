import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import _ from "lodash";
var moment = require("moment");
moment().format();

class Bubble extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [],
			options: {
				chart: {
					height: 350,
					type: "bubble"
				},
				colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
				dataLabels: {
					enabled: false
				},
				fill: {
					opacity: 0.8
				},
				title: {
					text: "Monthly moods"
				},
				xaxis: {
					tickAmount: 6,
					type: "datetime"
				},
				yaxis: {
					show: true,
					tickAmount: 8,
					min: 6,
					labels: {
						formatter: function(val) {
							return val + ":00";
						}
					}
				},
				tooltip: {
					x: {
						show: true,
						format: "dd MMM",
						formatter: undefined
					},
					y: {
						formatter: undefined,
						title: {
							formatter: (seriesName) => seriesName
						}
					},
					z: {
						show: true,
						formatter: undefined,
						title: "Intensity: "
					}
				},
				legend: {
					showForNullSeries: false,
					showForZeroSeries: false
				}
			}
		};
	}

	// component life cycle method
	componentDidMount = () => {
		axios
			.get(
				"https://2xi4uzqzba.execute-api.eu-west-2.amazonaws.com/dev/Thoughts"
			)
			.then((response) => {
				// handle success

				let fullData = response.data.thoughts;
				//console.log(fullData);
				for (let i = 0; i < fullData.length; i++) {
					let thought = fullData[i];
					let date = moment.utc(thought.Timestamp).format("YYYY-MM-DD");
					let time = moment.utc(thought.Timestamp).format("HH:MM");
					thought.eventDate = date;
					thought.eventTime = time;
				}

				//create last month in dates
				var end = moment().format("YYYY-MM-DD");
				var start = moment()
					.subtract(1, "months")
					.format("YYYY-MM-DD");
				const range = moment.range(start, end);

				console.log(start, end);

				//filter data to be in range of last month

				var lastMonthData = fullData.filter(function(entry) {
					return range.contains(moment(entry.eventDate)) === true;
				});

				console.log(lastMonthData);

				const moods = [
					"Neutral",
					"Stressed",
					"Anxious",
					"Sad",
					"Angry",
					"Overwhelmed",
					"Exhausted",
					"Happy",
					"Excited",
					"Inspired",
					"Calm"
				];

				const plottable = moods.map((name) => {
					// Filter the data to just data for this mood name.
					const matches = lastMonthData.filter((datum) => datum.Mood === name);
					// Format the data into a list of datetimes for this mood.
					const data = matches.map((record) => {
						// The library wants time and intentisty to be non-string
						// The library wants things in MM-DD-YYYY format.
						const [year, month, day] = record.eventDate.split("-");
						const [hour, minute] = record.eventTime.split(":").map(Number);
						const intensityInt = parseInt(record.Mood_intensity);
						return [`${month}-${day}-${year}`, hour, intensityInt];
					});
					// All the records for this mood.
					return { name, data };
				});

				console.log(plottable);

				this.setState({
					series: plottable
				});
			})

			.catch(function(error) {
				// handle error
				console.error(error);
			});
	};

	render() {
		return (
			<div>
				<div id="bubble">
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type="bubble"
						height={350}
					/>
				</div>
				<div id="html-dist"></div>
			</div>
		);
	}
}

export default Bubble;
