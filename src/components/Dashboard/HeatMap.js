import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class HeatMap extends React.Component {
	constructor(props) {
		super(props);

		function generateData(count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = (i + 1).toString();
				var y =
					Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
					yrange.min;

				series.push({
					x: x,
					y: y
				});
				i++;
			}
			return series;
		}

		var data = [
			{
				name: "Positive emotions",
				data: generateData(7, {
					min: 0,
					max: 10
				})
			},
			{
				name: "Negative emotions",
				data: generateData(7, {
					min: 0,
					max: 10
				})
			},
			{
				name: "Negative thoughts",
				data: generateData(7, {
					min: 0,
					max: 10
				})
			}
		];

		data.reverse();

		var colors = ["#F3B415", "#F27036", "#663F59"];

		colors.reverse();

		this.state = {
			series: data,
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
