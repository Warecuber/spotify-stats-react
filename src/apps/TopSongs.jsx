import React, { useState, useEffect } from "react";

// Components/utils
import Song from "../components/Song";
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";

// Private functions

// Public functions
const TopSongs = () => {
	const [userState] = useUser();
	const [top_songs, setTopSongs] = useState([]);
	const [is_loading, setIsLoading] = useState(true);
	useEffect(() => {
		if (userState.is_logged_in && userState.authtoken) {
			apiCaller
				.get("/me/top/tracks", {
					headers: { Authorization: `Bearer ${userState.authtoken}` },
				})
				.then(({ data }) => {
					setTopSongs(data.items);
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
				top_songs.map((song) => <Song data={song} key={song.name} />)
			)}
		</div>
	);
};
// exports
export default TopSongs;
