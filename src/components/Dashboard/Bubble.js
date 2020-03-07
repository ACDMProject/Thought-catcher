import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

/*
          // this function will generate output in this format
          // data = [
              [timestamp, 23],
              [timestamp, 33],
              [timestamp, 12]
              ...
          ]
          */
function generateData(baseval, count, yrange) {
	var i = 0;
	var series = [];
	while (i < count) {
		var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
		var y =
			Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
		var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

		series.push([x, y, z]);
		baseval += 86400000;
		i++;
	}
	return series;
}
// data format for buble chart is [
//     [xaxis,yaxis,size],[xaxis,yaxis,size]
// ]
// e.g. we can try to have [date, time of day, mood intensity] with colour representing the type of mood

class Bubble extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Anxious",
					data: [
						["02-02-2020 GMT", 9, 5],
						["02-03-2020 GMT", 11, 3],
						["02-07-2020 GMT", 13, 1],
						["02-09-2020 GMT", 14, 4],
						["02-15-2020 GMT", 17, 1],
						["02-16-2020 GMT", 20, 1],
						["02-17-2020 GMT", 22, 5]
					]
				},
				{
					name: "Overwhelmed",
					data: [
						["02-04-2020 GMT", 9.5, 5],
						["02-08-2020 GMT", 12, 3],
						["02-18-2020 GMT", 15, 1],
						["02-19-2020 GMT", 16, 4],
						["02-20-2020 GMT", 18, 2],
						["02-27-2020 GMT", 22, 1],
						["02-28-2020 GMT", 23, 5]
					]
				},
				{
					name: "Excited",
					data: [
						["02-01-2020 GMT", 6, 5],
						["02-05-2020 GMT", 12.5, 3],
						["02-09-2020 GMT", 13, 5],
						["22-21-2020 GMT", 14, 3],
						["22-27-2020 GMT", 17.5, 1],
						["22-28-2020 GMT", 24, 2]
					]
				},
				{
					name: "Angry",
					data: [
						["02-09-2020 GMT", 10, 5],
						["02-12-2020 GMT", 12.5, 3],
						["02-13-2020 GMT", 15, 5],
						["02-19-2020 GMT", 15, 3],
						["02-11-2020 GMT", 21, 1],
						["02-02-2020 GMT", 24, 2]
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
				}
			}
		};
	}

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
