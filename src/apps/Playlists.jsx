import React, { useState, useEffect } from "react";

// Components/utils
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";
import Playlist from "../components/Playlist";

// Private functions

// Public functions
const Playlists = () => {
	const [userState] = useUser();
	const [playlists, setPlaylists] = useState([]);
	const [is_loading, setIsLoading] = useState(true);
	useEffect(() => {
		if (userState.is_logged_in && userState.authtoken) {
			apiCaller
				.get("/me/playlists?limit=20&offset=0", {
					headers: { Authorization: `Bearer ${userState.authtoken}` },
				})
				.then(({ data }) => {
					setPlaylists(data.items);
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
				playlists.map((playlist) => (
					<Playlist data={playlist} key={playlist.name} />
				))
			)}
		</div>
	);
};
// exports
export default Playlists;
