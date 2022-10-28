import React from "react";
import { toast } from "react-toastify";

// Components/utils
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";

// Private functions
const playPlaylist = (authtoken, playlist_uri, playlist_name) => {
	// Todo: add this once there's a miniplayer
	// apiCaller
	// 	.post(`/me/player/queue?uri=${song_uri}`, null, {
	// 		headers: { Authorization: `Bearer ${authtoken}` },
	// 	})
	// 	.then(() => {
	// 		toast(`${song_name} added to queue`, { type: "success" });
	// 		console.log("Success");
	// 	})
	// 	.catch((err) => {
	// 		toast(`Unable to add ${song_name} to queue`, { type: "error" });
	// 		console.log(err);
	// 	});
};

// Public functions
const Playlist = (props) => {
	const [userState] = useUser();
	const playlist_name = props.data.name;
	const playlist_image = props.data.images[0].url;
	const playlist_owner = props.data.owner.display_name;
	const playlist_uri = props.data.uri;

	return (
		<div className="playlist">
			<div className="playlist__header">
				<div>{playlist_name}</div>
				<div>Owner: {playlist_owner}</div>
			</div>
			<div className="playlist__footer">
				<img
					src={playlist_image}
					alt="Playlist image"
					className="playlist__image"
				/>
				<button
					className="button is--green"
					onClick={() => {
						if (userState.is_logged_in && userState.authtoken) {
							playPlaylist(userState.authtoken, playlist_uri, playlist_name);
						}
					}}
				>
					Play now
				</button>
			</div>
		</div>
	);
};

// exports
export default Playlist;
