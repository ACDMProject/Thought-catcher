import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);
moment().format();

class Donut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      labels: [
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
        "None - feeling great!",
        "Unsure"
      ],
      dataLabels: {
        enabled: true,
        enabledOnSeries: true
      },
      options: {
        labels: [
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
          "None - feeling great!",
          "Unsure"
        ],
        colors: [
          "#96508E",
          "#009BF9",
          "#86A8E7",
          "#fc5c65",
          "#FF397B",
          "#8073CA",
          "#f7b731",
          "#F7ABB9",
          "#D16BA5",
          "#fed330",
          "#2bcbba",
          "#778ca3"
        ],
        chart: {
          type: "donut"
        },
        plotOptions: {
          pie: {
            expandOnClick: true
          }
        },
        tooltip: {
          y: {
            formatter: function(value) {
              return "";
            }
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

  // component life cycle method
  componentDidMount = () => {
    axios
      .get(
        "https://2xi4uzqzba.execute-api.eu-west-2.amazonaws.com/dev/Thoughts"
      )
      .then(response => {
        var fullData = response.data.thoughts;
        //console.log(fullData);

        for (let i = 0; i < fullData.length; i++) {
          let thought = fullData[i];
          let date = moment.utc(thought.Timestamp).format("YYYY-MM-DD");
          let time = moment.utc(thought.Timestamp).format("HH:MM");
          thought.eventDate = date;
          thought.eventTime = time;
        }
        //console.log(fullData);

        //create last month in dates
        var end = moment().format("YYYY-MM-DD");
        var start = moment()
          .subtract(1, "months")
          .format("YYYY-MM-DD");
        const range = moment.range(start, end);

        //console.log(start, end);

        //filter data to be in range of last week

        var lastMonthData = fullData.filter(function(entry) {
          return range.contains(moment(entry.eventDate)) === true;
        });

        //console.log(lastMonthData);
        var total = lastMonthData.length;

        const distortions = [
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
          "None - feeling great!",
          "Unsure"
        ];

        let sum = [];

        function countDistortions(distortion, lastMonthData) {
          let count = 0;
          for (let i = 0; i < lastMonthData.length; i++) {
            if (lastMonthData[i].Distortion === distortion) {
              count++;
            }
          }
          return count;
        }

        for (let i = 0; i < distortions.length; i++) {
          let distortion = distortions[i];

          sum.push(countDistortions(distortion, lastMonthData));
        }
        //console.log(sum);

        // divide each sum by the total and * 100 to make percentages
        let percentages = [];
        function makePercent(item, total) {
          var number = (item / total) * 100;

          var rounded = Math.round(number * 10) / 10;
          return rounded;
        }
        for (let i = 0; i < sum.length; i++) {
          let item = sum[i];

          percentages.push(makePercent(item, total));
        }
        //console.log(percentages);

        this.setState({
          series: percentages
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
