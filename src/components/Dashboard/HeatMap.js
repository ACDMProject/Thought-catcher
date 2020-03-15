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
					type: "datetime",
					categories: []
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

				console.log(lastWeekData);

				// create array with each date for last 7 days
				let lastWeek = [
					moment()
						.subtract(7, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(6, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(5, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(4, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(3, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(2, "days")
						.format("YYYY-MM-DD"),
					moment()
						.subtract(1, "days")
						.format("YYYY-MM-DD")
				];

				console.log(lastWeek);

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
				function countMood(mood, lastWeekData, lastWeek) {
					let count = 0;
					for (let j = 0; j < lastWeek.length; j++) {
						for (let i = 0; i < lastWeekData.length; i++) {
							if (lastWeek[j] === lastWeekData[i].eventDate) {
								if (lastWeekData[i].Mood === mood) {
									count++;
								}
							}
						}
					}
					return count;
				}

				//console.log(countMood("Anxious", fullData, lastWeek));

				//function to count thoughts
				function countThought(thought, lastWeekData, lastWeek) {
					let count = 0;
					for (let j = 0; j < lastWeek.length; j++) {
						for (let i = 0; i < lastWeekData.length; i++) {
							if (lastWeek[j] === lastWeekData[i].eventDate) {
								if (lastWeekData[i].Distortion === thought) {
									count++;
								}
							}
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

					sumPositiveMoods.push(
						countMood(positiveMood, lastWeekData, lastWeek)
					);
				}
				console.log(sumPositiveMoods);

				// count negative moods
				for (let i = 0; i < negativeMoods.length; i++) {
					let negativeMood = negativeMoods[i];

					sumNegativeMoods.push(
						countMood(negativeMood, lastWeekData, lastWeek)
					);
				}
				console.log(sumNegativeMoods);

				// count negative thoughts
				for (let i = 0; i < negativeThoughts.length; i++) {
					let negativeThought = negativeThoughts[i];

					sumNegativeThoughts.push(
						countThought(negativeThought, lastWeekData, lastWeek)
					);
				}
				console.log(sumNegativeThoughts);

				var updatedData = [
					{
						name: "Positive moods",
						data: [1, 3, 4, 3, 2, 4, 5]
					},
					{
						name: "Negative moods",
						data: [1, 3, 4, 3, 2, 4, 5]
					},
					{
						name: "Negative Thoughts",
						data: [1, 3, 4, 3, 2, 4, 5]
					}
				];

				this.setState({
					series: updatedData,
					options: {
						xaxis: {
							categories: lastWeek
						}
					}
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
