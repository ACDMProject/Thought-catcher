import React, { useState } from "react";
var moment = require("moment");

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
    <div className="row date-box justify-content-between shadow-sm">
      <div className="col-6">
        <div className="row d-flex pt-3 pl-4  d-flex align-self-center">
          <h5 className="font-weight-bold align-items-end">{day}</h5>
        </div>
        <div className="row d-flex mt-0 pl-4 d-flex align-self-center">
          <h6>{date + " " + month}</h6>
        </div>
      </div>
      <div className="col-6 d-flex align-self-center justify-content-end pr-3">
        <h5>{time}</h5>
      </div>
    </div>
  );
}
export default DateTime;
