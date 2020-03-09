import React from "react";
import Welcome from "./Welcome";
import Calendar from "./Calendar";
import Weather from "./Weather";
import LearnMore from "./LearnMore.js";
import LetsGo from "./LetsGo.js";

function Home2() {
	return (
		<div className="container-fluid LandingPage">
			<div className="row homeRow">
				<div className="col-7">
					<Welcome />
				</div>
				<div className="col-4">
					<Weather />
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<LearnMore />
				</div>
				<div className="col-4">
					<LetsGo />
				</div>
				<div className="col-4">
					<Calendar />
				</div>
			</div>
		</div>
	);
}

export default Home2;
