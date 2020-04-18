import React from "react";
import MasterForm from "./MultiStepForm/MasterForm";
import scriberImage from "./3366283.png";

function MoodScriber() {
	return (
		<div className="container-fluid moodscriber">
			<div className="row d-flex justify-content-around align-items-center">
				<div className="col-lg-5 ">
					<h4 className="mt-1 mb-4">Mood Scriber </h4>
					<MasterForm />
				</div>

				<div className="col-lg-5 mt-5">
					<img
						src={scriberImage}
						alt="catchThought"
						id="catchThought"
						className="img-fluid"
					/>
				</div>
			</div>
		</div>
	);
}

export default MoodScriber;
