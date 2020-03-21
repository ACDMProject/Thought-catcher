import React from "react";
import Bubble from "./Bubble";
import Donut from "./Donut";
import HeatMap from "./HeatMap";
import { Carousel } from "react-bootstrap";

const style = {
  backgroundColor: "#9788B7",
  borderRadius: "5px 20px 5px"
};

const carousel = {
  backgroundColor: "white",
  borderRadius: "5px 20px 5px"
};

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col">
          <h3>Welcome to your Dashboard!</h3>
        </div>
      </div>
      <div class="row mb-3">
        <div className="col col-sm-12 col-lg-7 m-2 shadow-sm" style={style}>
          <div style={carousel} className="mt-3 mb-3 ml-2 mr-2 shadow-sm">
            <Carousel>
              <Carousel.Item>
                <Bubble />
              </Carousel.Item>
              <Carousel.Item>
                <HeatMap />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div
          className="col  d-flex justify-content-center m-2 shadow-sm"
          style={style}
        >
          <div style={carousel} className="mt-3 mb-3 pr-3 pl-3 shadow-sm">
            <Donut />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
