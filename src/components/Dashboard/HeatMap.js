import React from "react";
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
          height: 370,
          type: "heatmap"
        },
        dataLabels: {
          enabled: false
        },
        colors: colors,
        xaxis: {
          type: "date",
          format: "dd MMM",
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
      .then(response => {
        var fullData = response.data.thoughts;
        //console.log(fullData);

        // added eventDate and eventTime into the data
        for (let i = 0; i < fullData.length; i++) {
          let thought = fullData[i];
          let date = moment.utc(thought.Timestamp).format("YYYY-MM-DD");
          let time = moment.utc(thought.Timestamp).format("HH:MM");
          thought.eventDate = date;
          thought.eventTime = time;
        }

        //create last week in dates

        var end = moment().format("YYYY-MM-DD");
        var start = moment()
          .subtract(1, "weeks")
          .format("YYYY-MM-DD");
        const range = moment.range(start, end);

        //filter data to be in range of last week

        var lastWeekData = fullData.filter(function(entry) {
          return range.contains(moment(entry.eventDate)) === true;
        });

        //console.log(lastWeekData);

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

        //console.log(lastWeek);

        // create days of week from lastWeek

        let lastWeekDays = [];

        lastWeek.forEach(function(date) {
          var day = moment(date).format("DD MMM");
          lastWeekDays.push(day);
        });

        console.log(lastWeekDays);

        const negativeThoughts = [
          "All or Nothing",
          "Jumping to Conclusions",
          "Overgeneralisation",
          "Catastrophising",
          "Mental filtering",
          "Disqualifying the Positive",
          "Personalisation",
          "Shoulds & Oughts",
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

        // NEED TO CREATE FUNCTIONS WHICH COUNTS THE NUMBER OF NEGATIVE MOODS, NEGATIVE THOUGHTS
        // AND POSITIVE MOODS FOR EACH DAY OF THE LAST 7 DAYS.

        //negative moods
        const negativeMoodDays = lastWeek.map(day => {
          // find data that matches day
          const negativeMoodData = lastWeekData
            .filter(({ Timestamp }) => {
              // filter by days where the Timestamp starts with our day
              return Timestamp.startsWith(day);
            })
            .filter(({ Mood }) => {
              // filter for days where negativeMoods contains our current Mood
              return negativeMoods.includes(Mood);
            });
          //return our new object with a count of those days
          return {
            day: day,
            count: negativeMoodData.length
          };
        });
        let negativeMoodresult = negativeMoodDays.map(a => a.count);
        //console.log(negativeMoodresult);

        //negative thoughts
        const negativeThoughtDays = lastWeek.map(day => {
          // find data that matches day
          const negativeThoughtData = lastWeekData
            .filter(({ Timestamp }) => {
              // filter by days where the Timestamp starts with our day
              return Timestamp.startsWith(day);
            })
            .filter(({ Distortion }) => {
              // filter for days where negativeMoods contains our current Mood
              return negativeThoughts.includes(Distortion);
            });
          //return our new object with a count of those days
          return {
            day: day,
            count: negativeThoughtData.length
          };
        });
        let negativeThoughtresult = negativeThoughtDays.map(a => a.count);
        //console.log(negativeThoughtresult);

        //positive moods
        const positiveMoodDays = lastWeek.map(day => {
          // find data that matches day
          const positiveMoodData = lastWeekData
            .filter(({ Timestamp }) => {
              // filter by days where the Timestamp starts with our day
              return Timestamp.startsWith(day);
            })
            .filter(({ Mood }) => {
              // filter for days where positiveMoods contains our current Mood
              return positiveMoods.includes(Mood);
            });
          //return our new object with a count of those days
          return {
            day: day,
            count: positiveMoodData.length
          };
        });
        let positiveMoodresult = positiveMoodDays.map(a => a.count);
        //console.log(positiveMoodresult);

        var updatedData = [
          {
            name: "Negative moods",
            data: negativeMoodresult
          },
          {
            name: "Negative Thoughts",
            data: negativeThoughtresult
          },
          {
            name: "Positive moods",
            data: positiveMoodresult
          }
        ];

        this.setState({
          series: updatedData,
          options: {
            xaxis: {
              categories: lastWeekDays
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
            height={370}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default HeatMap;
