import React from "react";
import Welcome from "./Welcome";
import HomeCalendar from "./HomeCalendar";
import DateTime from "./DateTime";
import LearnMore from "./LearnMore.js";
import LetsGo from "./LetsGo.js";

function Home() {
  return (
    <div className="container-fluid LandingPage">
      <div className="home-row">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <Welcome />
          </div>
          <div className="col-md-3">
            <DateTime />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <LearnMore />
          </div>
          <div className="col-md-4">
            <LetsGo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
