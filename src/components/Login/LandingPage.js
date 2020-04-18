import React from "react";
import Login from "./Login";
import tspCatchThoughtCrop from "./tspCatchThoughtCrop.png";

function LandingPage() {
	return (
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-lg-7">
					<img
						src={tspCatchThoughtCrop}
						alt="catchThought"
						id="catchThought"
						className="img-fluid rounded mx-auto d-block"
					/>
				</div>
				<div className="col-lg-4">
					<Login />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
