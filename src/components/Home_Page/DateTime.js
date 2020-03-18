import React, { useState } from "react";
var moment = require("moment");
moment().format();

function DateTime() {
  const day = moment().format("dddd");
  const date = moment().format("Do");
  const month = moment().format("MMMM");

  const now = moment().format("LT");

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = moment().format("LT"); //this will allow us to call a new updated time
    setTime(newTime); //this is the function we delcared would update our state in the destructured array
  }

  setInterval(updateTime, 1000); //calls updatedTime every second

  return (
    <div className="row justify-content-around">
      <div className="col-6 date-box text-center">
        <h5 className="mb-0">{day}</h5>
        <h2 className="mb-0">{date}</h2>
        <h5>{month}</h5>
      </div>
      <div className="col-4 time-box text-center ">
        {" "}
        <h2>{time}</h2>
      </div>
    </div>
  );
}
export default DateTime;
