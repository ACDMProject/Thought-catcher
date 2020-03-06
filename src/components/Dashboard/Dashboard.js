import React from "react";
import Bubble from "./Bubble";
import Donut from "./Donut";
import LineColumnArea from "./LineColumnArea";

function Dashboard() {
	return (
		<React.Fragment>
			<div id="about" className="container">
				<React.Fragment>
					<Bubble />
					<Donut />
					<LineColumnArea />
				</React.Fragment>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
