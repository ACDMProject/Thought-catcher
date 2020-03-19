import React from "react";
var moment = require("moment");
moment().format();

function Welcome() {
  const hour = moment().format("hh");
  const timeOfDay = moment().format("a");

  let welcomeMessage;

  if (hour <= 11 && timeOfDay === "AM") {
    welcomeMessage = "Good morning";
  } else if (timeOfDay === "PM" && hour < 6) {
    welcomeMessage = "Good afternoon";
  } else {
    welcomeMessage = "Good evening";
  }

  return (
    <h1 className="welcome d-flex align-items-center pl-3 mt-2 pt-3">
      {welcomeMessage + " _________!"}
    </h1>
  );
}
export default Welcome;
