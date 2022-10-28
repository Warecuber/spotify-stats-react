import React from "react";

// Components/utils
import useUser from "../stores/UserStore";
import useApps from "../stores/AppsStore";
import TopSongs from "../apps/TopSongs";

// Private functions

// Public functions
const SpotifyApp = () => {
	const [userState, userActions] = useUser();
	const [appState, appActions] = useApps();

	const getCurrentApp = () => {
		switch (appState.active_app) {
			case "TopSongs":
				return <TopSongs />;
			case "TopArtists":
				return <div>Top Artists</div>;
			case "Playlists":
				return <div>Playlists</div>;
			case "LikedSongs":
				return <div>Liked Songs</div>;
		}
	};

	return (
		<div className="webapp">
			<div className="webapp__header">
				<div
					className={`tab ${
						appState.active_app === "TopSongs" ? "active" : ""
					}`}
					onClick={() => {
						appActions.changeApp("TopSongs");
					}}
				>
					Top Songs
				</div>
				<div
					className={`tab ${
						appState.active_app === "TopArtists" ? "active" : ""
					}`}
					onClick={() => {
						appActions.changeApp("TopArtists");
					}}
				>
					Top Artists
				</div>
				<div
					className={`tab ${
						appState.active_app === "Playlists" ? "active" : ""
					}`}
					onClick={() => {
						appActions.changeApp("Playlists");
					}}
				>
					Playlists
				</div>
				<div
					className={`tab ${
						appState.active_app === "LikedSongs" ? "active" : ""
					}`}
					onClick={() => {
						appActions.changeApp("LikedSongs");
					}}
				>
					Liked Songs
				</div>
			</div>
			<div className="webapp__title">
				Welcome, {userState.name || "unknown"}
			</div>
			<div className="webapp__body">{getCurrentApp()}</div>
			<div className="webapp__footer">
				<p>
					Created by{" "}
					<a
						href="https://github.com/Warecuber"
						className="link"
						target="_blank"
						rel="noreferrer"
					>
						Warecuber
					</a>
				</p>
			</div>
		</div>
	);
};

// Exports
export default SpotifyApp;
