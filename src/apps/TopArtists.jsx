import React, { useState, useEffect } from "react";

// Components/utils
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";
import Artist from "../components/Artist";

// Private functions

// Public functions
const TopArtists = () => {
	const [userState] = useUser();
	const [top_artists, setTopArtists] = useState([]);
	const [is_loading, setIsLoading] = useState(true);
	useEffect(() => {
		if (userState.is_logged_in && userState.authtoken) {
			apiCaller
				.get("/me/top/artists", {
					headers: { Authorization: `Bearer ${userState.authtoken}` },
				})
				.then(({ data }) => {
					setTopArtists(data.items);
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	return (
		<div>
			{is_loading ? (
				<div>Loading...</div>
			) : (
				top_artists.map((artist) => <Artist data={artist} key={artist.name} />)
			)}
		</div>
	);
};
// exports
export default TopArtists;
