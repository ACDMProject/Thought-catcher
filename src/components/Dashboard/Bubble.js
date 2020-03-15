import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import _ from "lodash";
var moment = require("moment");
moment().format();

/*
          // this function will generate output in this format
          // data = [
              [timestamp, 23],
              [timestamp, 33],
              [timestamp, 12]
              ...
          ]
          */

// data format for buble chart is [
//     [xaxis,yaxis,size],[xaxis,yaxis,size]
// ]
// e.g. we can try to have [date, time of day, mood intensity] with colour representing the type of mood
// need to update y-axis to be in time format

class Bubble extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Anxious",
					data: [
						["02-05-2020", "08:11", 5],
						["02-05-2020", "11:20", 3],
						["02-07-2020", "13:12", 1],
						["02-09-2020", "14:10", 4],
						["02-15-2020", "17:10", 1],
						["02-16-2020", "20:12", 1],
						["02-17-2020", "22:12", 5]
					]
				}
			],
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
				//console.log(fullData);

				var filtered = _.map(fullData, function(object) {
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
				if (grouped.Mood === "Anxiety") {
					console.log(grouped);
				}

				// var data = [];
				// data.push

				// var series = {
				// 	name: "Anxiety",
				// 	data:
				// };

				// console.log(series);
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
