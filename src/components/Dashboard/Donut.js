import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class Donut extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [44, 55, 41, 17, 15],
			options: {
				chart: {
					type: "donut"
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
						width="380"
					/>
				</div>
				<div id="html-dist"></div>
			</div>
		);
	}
}

export default Donut;
