import React from "react";
import Welcome from "./Welcome";
import DateTime from "./DateTime";
import LearnMore from "./LearnMore.js";
import LetsGo from "./LetsGo.js";
import HeatMap from "../Dashboard/HeatMap";
import SubHeading from "./SubHeading";
function Home() {
  return (
    <div className="container-fluid LandingPage">
      <div className="row pt-3 pl-4 pr-4 justify-content-between">
        <div className="col-md-4">
          <Welcome />
        </div>
        <div className="col-md-3">
          <DateTime />
        </div>
      </div>
      <div className="row pt-3 pl-4 pr-4 mt-4 pb-1 justify-content-between">
        <div className="col-md-8">
          <SubHeading />
          <div className="pt-3">
            <HeatMap />
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <LearnMore />
            <LetsGo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
