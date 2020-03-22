import React from "react";
import Welcome from "./Welcome";
import DateTime from "./DateTime";
import LearnMore from "./LearnMore.js";
import LetsGo from "./LetsGo.js";
import SubHeading from "./SubHeading";
import Donut from "../Dashboard/Donut";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row pl-4 pr-4 justify-content-between">
        <div className="col-md-4 d-flex align-items-center">
          <Welcome />
        </div>
        <div className="col-md-3">
          <DateTime />
        </div>
      </div>

      <div className="row pt-3 pl-4 pr-4 pb-1 justify-content-between">
        <div className="col-md-4">
          <SubHeading />
        </div>
        <div className="col-md-4 donut-box shadow-sm align-self-start">
          <div className="donut-layer shadow-sm">
            <Donut />
          </div>
        </div>
        <div className="col-md-3 p-0">
          <LearnMore />
          <LetsGo />
        </div>
      </div>
    </div>
  );
}

export default Home;
