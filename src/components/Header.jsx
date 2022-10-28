import React from "react";
const Header = () => {
	return (
		<div className="header">
			<img
				src="img/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
				alt="logo"
				className="header__logo"
			/>
			<div className="header__buttons">
				<button className="button is--black full--height">Log in</button>
			</div>
		</div>
	);
};

export default Header;
