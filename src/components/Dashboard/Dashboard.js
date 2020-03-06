import React from "react";
import Bubble from "./Bubble";
import Donut from "./Donut";

function Dashboard() {
	return (
		<React.Fragment>
			<div id="about" className="container">
				<React.Fragment>
					<Bubble />
					<Donut />
				</React.Fragment>
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
