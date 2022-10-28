import React, { useEffect } from "react";

// Components/utils
import useUser from "../stores/UserStore";

// Private functions

// Public functions
const Navbar = () => {
	useEffect(() => {
		const hash = window.location.hash;
		let URLSplit = hash.split("&");
		const token = URLSplit[0].replace("#access_token=", "");
		if (token) {
			actions.logIn(token);
		}
	}, []);

	const splitURL = window.location.href.split("?");
	const spotifyOAUTHUri = `https://accounts.spotify.com/en/authorize/?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&show_dialog=true&scope=user-top-read%20user-read-recently-played%20user-read-email%20user-read-private%20streaming%20user-read-playback-state%20playlist-read-collaborative%20playlist-read-private%20user-library-read&redirect_uri=${splitURL[0]}`;

	const [state, actions] = useUser();
	return (
		<div className="navbar">
			<img
				src="img/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
				alt="logo"
				className="navbar__logo"
			/>
			<div className="navbar__buttons">
				{state.is_logged_in ? (
					<button
						className="button is--black full--height"
						onClick={() => {
							actions.logOut();
						}}
					>
						Log out {state.email}
					</button>
				) : (
					<button
						className="button is--black full--height"
						onClick={() => {
							window.location = spotifyOAUTHUri;
						}}
					>
						Log in
					</button>
				)}
			</div>
		</div>
	);
};

// Exports
export default Navbar;
