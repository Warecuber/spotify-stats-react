import React from "react";

// Components/utils

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

// Public functions
const Song = (props) => {
	const song_name = props.data.name;
	const song_artists = props.data.artists;
	const song_preview_url = props.data.preview_url;
	const song_cover_art = props.data.album.images[0].url;

	return (
		<div className="song">
			<div className="song__header flex between">
				<div className="song__title">
					{song_name} - {contatenateArtistNames(song_artists)}
				</div>
				<button className="button is--green">Play Next</button>
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
