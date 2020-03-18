import React, { useState } from "react";
var moment = require("moment");
moment().format();

function DateTime() {
  const day = moment()
    .format("dddd")
    .toUpperCase();
  const date = moment().format("Do");
  const month = moment().format("MMMM YYYY");

  const now = moment().format("LT");

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = moment().format("LT"); //this will allow us to call a new updated time
    setTime(newTime); //this is the function we delcared would update our state in the destructured array
  }

  setInterval(updateTime, 1000); //calls updatedTime every second

  return (
    <div className="row p-0 date-box justify-content-between">
      <div className="col-7 date-box">
        <div className="row d-flex pt-3 pl-4 d-flex align-self-center">
          <h2 className="mb-1">{day}</h2>
        </div>
        <div className="row d-flex pt-1 pl-4 d-flex align-self-center">
          <h5>{date + " " + month}</h5>
        </div>
      </div>
      <div className="col-4 pt-3 pl-0 pr-1 time-box text-center">
        <h3>{time}</h3>
      </div>
    </div>
  );
}
export default DateTime;
