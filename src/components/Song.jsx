import React from "react";
import { toast } from "react-toastify";

// Components/utils
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";

// Private functions
const contatenateArtistNames = (artists) => {
	let artist_string = "";
	artists.forEach((artist, i) => {
		++i < artists.length
			? (artist_string += `${artist.name}/`)
			: (artist_string += artist.name);
	});

	return artist_string;
};
const addSongToQueue = (authtoken, song_uri, song_name) => {
	apiCaller
		.post(`/me/player/queue?uri=${song_uri}`, null, {
			headers: { Authorization: `Bearer ${authtoken}` },
		})
		.then(() => {
			toast(`${song_name} added to queue`, { type: "success" });
			console.log("Success");
		})
		.catch((err) => {
			toast(`Unable to add ${song_name} to queue`, { type: "error" });
			console.log(err);
		});
};

// Public functions
const Song = (props) => {
	const [userState] = useUser();
	const song_name = props.data.name;
	const song_artists = props.data.artists;
	const song_preview_url = props.data.preview_url;
	const song_cover_art = props.data.album.images[0].url;
	const song_uri = props.data.uri;

	return (
		<div className="song">
			<div className="song__header flex between">
				<div className="song__title">
					{song_name} - {contatenateArtistNames(song_artists)}
				</div>
				<button
					className="button is--green"
					onClick={() => {
						if (userState.is_logged_in && userState.authtoken) {
							addSongToQueue(userState.authtoken, song_uri, song_name);
						}
					}}
				>
					Play Next
				</button>
			</div>
			<div className="song__footer">
				<audio
					src={song_preview_url}
					controls={true}
					className="song__preview"
				></audio>
				<img src={song_cover_art} className="song__cover" />
			</div>
		</div>
	);
};

// exports
export default Song;
