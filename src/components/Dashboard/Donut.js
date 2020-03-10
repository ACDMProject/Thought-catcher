import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class Donut extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [44, 55, 41, 17, 15, 0, 7, 20, 10, 8],
			labels: [
				"All or nothing",
				"Jumping to conclusions",
				"Overgeneralising",
				"Catastrophising",
				"Mental filtering",
				"Disqualifying the positive",
				"Personalisation",
				"Shoulds and oughts",
				"Emotional reasoning",
				"Labelling"
			],
			dataLabels: {
				enabled: true,
				enabledOnSeries: true
			},
			options: {
				labels: [
					"All or nothing",
					"Jumping to conclusions",
					"Overgeneralising",
					"Catastrophising",
					"Mental filtering",
					"Disqualifying the positive",
					"Personalisation",
					"Shoulds and oughts",
					"Emotional reasoning",
					"Labelling"
				],
				chart: {
					type: "donut"
				},
				plotOptions: {
					pie: {
						expandOnClick: true
					}
				},
				title: {
					text: "Monthly distortions"
				},
				legend: {
					show: true,
					position: "right"
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: 200
							},
							legend: {
								position: "bottom"
							}
						}
					}
				]
			}
		};
	}

	render() {
		return (
			<div>
				<div id="donut">
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						labels={this.state.labels}
						type="donut"
						width="500"
					/>
				</div>
				<div id="html-dist"></div>
			</div>
		);
	}
}

export default Donut;
