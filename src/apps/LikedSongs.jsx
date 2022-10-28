import React, { useState, useEffect } from "react";

// Components/utils
import Song from "../components/Song";
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";

// Private functions

// Public functions
const LikedSongs = () => {
	const [userState] = useUser();
	const [top_songs, setLikedSongs] = useState([]);
	const [is_loading, setIsLoading] = useState(true);
	useEffect(() => {
		if (userState.is_logged_in && userState.authtoken) {
			apiCaller
				.get("/me/top/tracks", {
					headers: { Authorization: `Bearer ${userState.authtoken}` },
				})
				.then(({ data }) => {
					setLikedSongs(data.items);
					setIsLoading(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);
	// const top_songs = [
	// 	{
	// 		name: "Song 1",
	// 		artists: [{ name: "artist 1" }, { name: "artist 2" }],
	// 	},
	// 	{
	// 		name: "Song 2",
	// 		artists: [{ name: "artist 1" }],
	// 	},
	// 	{
	// 		name: "Song 3",
	// 		artists: [
	// 			{ name: "artist 1" },
	// 			{ name: "artist 2" },
	// 			{ name: "artist 3" },
	// 		],
	// 	},
	// 	{
	// 		name: "Song 4",
	// 		artists: [{ name: "artist 1" }],
	// 	},
	// ];
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
export default LikedSongs;
