import React from "react";
var moment = require("moment");
moment().format();

function Welcome() {
  const hour = moment().format("hh");
  const timeOfDay = moment().format("a");

  let welcomeMessage;

  if (hour <= 11 && timeOfDay === "am") {
    welcomeMessage = "Good morning";
  } else if (timeOfDay === "pm" && hour < 6) {
    welcomeMessage = "Good afternoon";
  } else {
    welcomeMessage = "Good evening";
  }

  return <h3 className="welcome">{welcomeMessage + ", welcome back!"}</h3>;
}
export default Welcome;
