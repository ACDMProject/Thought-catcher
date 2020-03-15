import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);
moment().format();

class HeatMap extends React.Component {
	constructor(props) {
		super(props);

		var data = [];

		data.reverse();

		var colors = ["#F3B415", "#F27036", "#663F59"];

		colors.reverse();

		this.state = {
			series: [],
			options: {
				chart: {
					height: 250,
					type: "heatmap"
				},
				dataLabels: {
					enabled: false
				},
				colors: colors,
				xaxis: {
					type: "category",
					categories: [
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday"
					]
				},
				title: {
					text: "HeatMap of the week"
				},
				grid: {
					padding: {
						right: 20
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
				var fullData = response.data.thoughts;
				//console.log(fullData);

				for (let i = 0; i < fullData.length; i++) {
					let thought = fullData[i];
					let date = moment.utc(thought.Timestamp).format("YYYY-MM-DD");
					let time = moment.utc(thought.Timestamp).format("HH:MM");
					thought.eventDate = date;
					thought.eventTime = time;
				}

				//create last week in dates
				var start = moment()
					.subtract(1, "weeks")
					.startOf("week")
					.format("YYYY-MM-DD");
				var end = moment()
					.subtract(1, "weeks")
					.endOf("week")
					.format("YYYY-MM-DD");
				const range = moment.range(start, end);

				//filter data to be in range of last week

				var lastWeekData = fullData.filter(function(entry) {
					return range.contains(moment(entry.eventDate)) === true;
				});

				// create array with each date for last 7 days
				let lastWeek = [
					moment()
						.subtract(1, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(2, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(3, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(4, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(5, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(6, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(7, "days")
						.format("YYYY-MM-DD")
				];

				const negativeThoughts = [
					"All or Nothing",
					"Jumping to Conclusions",
					"Overgeneralisation",
					"Catastrophising",
					"Mental filtering",
					"Disqualifying the Positive",
					"Personalisation",
					"Shoulds and Oughts",
					"Emotional Reasoning",
					"Labelling",
					"Unsure"
				];

				const positiveMoods = ["Happy", "Excited", "Inspired", "Calm"];

				const negativeMoods = [
					"Neutral",
					"Stressed",
					"Anxious",
					"Sad",
					"Angry",
					"Overwhelmed",
					"Exhausted"
				];

				//function to count moods
				function countMood(mood, fullData) {
					let count = 0;
					for (let i = 0; i < fullData.length; i++) {
						if (fullData[i].Mood === mood) {
							count++;
						}
					}
					return count;
				}

				//function to count thoughts
				function countThought(thought, fullData) {
					let count = 0;
					for (let i = 0; i < fullData.length; i++) {
						if (fullData[i].Distortion === thought) {
							count++;
						}
					}
					return count;
				}

				let sumPositiveMoods = [];
				let sumNegativeMoods = [];
				let sumNegativeThoughts = [];

				// count positive moods
				for (let i = 0; i < positiveMoods.length; i++) {
					let positiveMood = positiveMoods[i];

					sumPositiveMoods.push(countMood(positiveMood, fullData));
				}
				console.log(sumPositiveMoods);

				// count negative moods
				for (let i = 0; i < negativeMoods.length; i++) {
					let negativeMood = negativeMoods[i];

					sumNegativeMoods.push(countMood(negativeMood, fullData));
				}
				console.log(sumNegativeMoods);

				// count negative thoughts
				for (let i = 0; i < negativeThoughts.length; i++) {
					let negativeThought = negativeThoughts[i];

					sumNegativeThoughts.push(countThought(negativeThought, fullData));
				}
				console.log(sumNegativeThoughts);

				// var updatedData = [
				// 	{
				// 		name: "Positive moods",
				// 		data: positiveMoods
				// 	},
				// 	{
				// 		name: "Negative moods",
				// 		data: negativeMoods
				// 	},
				// 	{
				// 		name: "Negative Thoughts",
				// 		data: negativeThoughts
				// 	}
				// ];

				// this.setState({
				// 	series: updatedData
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
				<div id="chart">
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type="heatmap"
						height={250}
					/>
				</div>
				<div id="html-dist"></div>
			</div>
		);
	}
}

export default HeatMap;
