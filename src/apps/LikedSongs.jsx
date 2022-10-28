import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Components/utils
import Song from "../components/Song";
import useUser from "../stores/UserStore";
import apiCaller from "../utils/apiCaller";

// Private functions

// Public functions
const LikedSongs = () => {
	const [userState] = useUser();
	const [liked_songs, setLikedSongs] = useState([]);
	const [offset, setOffset] = useState(0);
	const [has_more, setHasMore] = useState(true);
	const [is_loading, setIsLoading] = useState(true);

	const loadSongs = () => {
		apiCaller
			.get(`/me/tracks?limit=50&offset=${offset}`, {
				headers: { Authorization: `Bearer ${userState.authtoken}` },
			})
			.then(({ data }) => {
				setLikedSongs([...liked_songs, ...data.items]);
				setIsLoading(false);
				if (liked_songs.length >= data.total) {
					setHasMore(false);
				} else {
					setOffset(offset + 50);
				}
			})
			.catch((err) => {
				toast("Unable to load liked songs", { type: "error" });
				console.log(err);
			});
	};
	useEffect(() => {
		if (userState.is_logged_in && userState.authtoken) {
			loadSongs();
		}
	}, []);
	return (
		<div>
			{is_loading ? (
				<div>Loading...</div>
			) : (
				liked_songs.map((song) => (
					<Song data={song.track} key={song.track.id} />
				))
			)}
			{has_more ? (
				<div className="flex center">
					<button
						className="button is--black"
						onClick={() => {
							if (has_more) {
								loadSongs();
							}
						}}
					>
						Load more
					</button>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};
// exports
export default LikedSongs;
