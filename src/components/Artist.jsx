import React from "react";

// Components/utils

// Private functions

// Public functions
const Artist = (props) => {
	const artist_name = props.data.name;
	const artist_link = props.data.external_urls.spotify;
	const artist_cover_art = props.data.images[0].url;

	return (
		<div className="artist">
			<a
				href={artist_link}
				target="_blank"
				rel="noreferrer"
				className="button is--green"
			>
				{artist_name}
			</a>
			<img
				src={artist_cover_art}
				alt={`${artist_name} cover art`}
				className="artist__image"
			/>
		</div>
	);
};

// exports
export default Artist;
