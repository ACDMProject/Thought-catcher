import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import DistDiary from "./DistDiary";
import axios from "axios";
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);
moment().format();

export class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      data: [],
      filteredData: []
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

        // add values which extract date and time from timestamp
        for (let i = 0; i < fullData.length; i++) {
          let thought = fullData[i];
          let date = moment.utc(thought.Timestamp).format("YYYY-MM-DD");
          let time = moment.utc(thought.Timestamp).format("HH:MM");
          thought.eventDate = date;
          thought.eventTime = time;
        }

        this.setState({
          data: fullData,
          filteredData: fullData
        });
      })

      .catch(function(error) {
        // handle error
        console.error(error);
      });
  };

  //modified so that when you click the selected date again, selectDay gets set to undefined
  //if statement in return method that toggles what's displayed
  handleDayClick = (day, { selected }) => {
    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });

    ///filter data to match the date selected
    let data = this.state.data;

    var dataToRender = [];
    data.forEach(function(entry) {
      let dayFormatted = moment(day).format("YYYY-MM-DD");
      if (entry.eventDate === dayFormatted) {
        dataToRender.push(entry);
      }
    });
    this.setState({ filteredData: dataToRender });
  };

  // get data from database and filter for day selected on calendar

  render() {
    return (
      <div className="container-fluid container-diary">
        <div className="row m-3 justify-content-around ">
          <div className="col-4">
            <h4>Check out your diary!</h4>

            <div className="donut-box">
              <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                className="mt-3 mb-0 donut-layer"
              />
              {this.state.selectedDay ? (
                <React.Fragment>
                  <p className="mb-0 ml-3 mt-2">
                    You're viewing {this.state.selectedDay.toLocaleDateString()}
                  </p>
                  <p className="mb-0 ml-3">
                    <b>Scroll down to view your entries.</b>
                  </p>
                </React.Fragment>
              ) : (
                <p className="mb-0 mt-2 ml-3">
                  <b>Please select a day.</b>
                </p>
              )}
            </div>

            {this.state.selectedDay ? (
              <div>
                {this.state.filteredData.map((item, key) => (
                  <p>
                    <br />
                    <strong>Mood: </strong>
                    {item.Mood}
                    <br />
                    <strong>Intensity: </strong>
                    {item.Mood_intensity}
                    <br />
                    <strong>Expansion on mood: </strong>
                    {item.Thoughts}
                    <br />
                    <strong>Distortion: </strong>
                    {item.Distortion}
                    <br />
                    <strong>Response: </strong>
                    {item.Response}
                    <br />
                  </p>
                ))}
              </div>
            ) : (
              <p> </p>
            )}
          </div>
          <div className="col-6">
            <DistDiary />
          </div>
        </div>
      </div>
    );
  }
}

export default Diary;
