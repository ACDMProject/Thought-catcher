import React from "react";
var moment = require("moment");

function Welcome() {
  const hour = moment().format("H");
  console.log(hour);

  let welcomeMessage = "";
  switch (true) {
    case hour < 12:
      welcomeMessage = "Good morning";
      break;
    case hour < 18:
      welcomeMessage = "Good afternoon";
      break;
    case hour >= 18:
      welcomeMessage = "Good evening";
      break;
    default:
      break;
  }

  return (
    <h3 className="welcome d-flex align-items-center pl-1">
      {welcomeMessage + " _________!"}
    </h3>
  );
}
export default Welcome;
