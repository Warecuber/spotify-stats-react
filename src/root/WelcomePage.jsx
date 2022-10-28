import React from "react";

// Components/utils

// Private functions

// Public functions
const WelcomePage = () => {
	return (
		<div className="webapp">
			<div className="webapp__title">
				<span className="bold">View your Spotify statisitics</span>
			</div>
			<div className="webapp__body">
				<span>
					Click Login to login with your Spotify account and authorize my app to
					view your information.
				</span>
			</div>
		</div>
	);
};

// exports
export default WelcomePage;
