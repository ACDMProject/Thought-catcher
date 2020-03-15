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
					tickAmount: 12,
					type: "datetime"
				},
				yaxis: {
					max: 24
					// labels: {
					// 	formatter: function(val) {
					// 		return val + ":00";
					// 	}
					//}
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
							formatter: (seriesName) => seriesName + " - time"
						}
					},
					z: {
						formatter: undefined,
						title: "Intensity: "
					}
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

				//filter data to be in range of last week

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

				var filtered = _.map(lastMonthData, function(object) {
					return _.pick(object, [
						"Mood",
						"eventDate",
						"eventTime",
						"Mood_intensity"
					]);
				});
				console.log(filtered);

				var grouped = _.groupBy(filtered, function(thought) {
					return thought.Mood;
				});

				console.log(grouped);
				// if (grouped.Mood === "Anxiety") {
				// 	console.log(grouped);
				// }

				// var data = [];
				// data.push;

				//need to update series with right data

				let groups = Object.create(null);

				filtered.forEach((item) => {
					if (!groups[item.Mood]) {
						groups[item.Mood] = [];
					}

					groups[item.Mood].push({
						x: item.eventDate,
						y: item.eventTime,
						z: item.Mood_intensity
					});
				});

				let result = Object.entries(groups).map(([k, v]) => ({ [k]: v }));

				console.log(result);

				// this.setState({
				// 	series: result

				// });
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
