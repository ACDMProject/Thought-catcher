import React from "react";
import Bubble from "./Bubble";
import Donut from "./Donut";
import HeatMap from "./HeatMap";

function Dashboard() {
	return (
		<React.Fragment>
			<div id="about" className="container">
				<React.Fragment>
					<Bubble />
					<Donut />
					<HeatMap />
				</React.Fragment>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
