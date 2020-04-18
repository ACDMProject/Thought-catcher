import React from "react";
import { Link } from "react-router-dom";
import homeImage from "./3364392.jpg";

function SubHeading() {
	const navStyle = {
		color: "purple",
	};
	return (
		<div>
			<p className="sub-heading shadow-sm mb-0">
				CBT focuses on how your thoughts affect your moods and teaches you
				skills for dealing with negative thinking. A good way to kick negative
				thinking is to catch your thoughts and identify which thinking patterns
				have been getting you down.
				<Link style={navStyle} to="/moodscriber">
					{" "}
					Ready to log some thoughts?
				</Link>
			</p>
			<img
				src={homeImage}
				alt="home-pic"
				id="home-pic"
				className="img-fluid pic-radius shadow-sm"
			/>
		</div>
	);
}
export default SubHeading;
