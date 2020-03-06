import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
var _seed = 42;
Math.random = function() {
	_seed = (_seed * 16807) % 2147483647;
	return (_seed - 1) / 2147483646;
};

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

class Bubble extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [
				{
					name: "Bubble1",
					data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
						min: 10,
						max: 60
					})
				},
				{
					name: "Bubble2",
					data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
						min: 10,
						max: 60
					})
				},
				{
					name: "Bubble3",
					data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
						min: 10,
						max: 60
					})
				},
				{
					name: "Bubble4",
					data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
						min: 10,
						max: 60
					})
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
					text: "Simple Bubble Chart"
				},
				xaxis: {
					tickAmount: 12,
					type: "category"
				},
				yaxis: {
					max: 70
				}
			}
		};
	}

	render() {
		return (
			<div>
				<div id="chart">
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
