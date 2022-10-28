import axios from "axios";

const apiCaller = axios.create({
	baseURL: "https://api.spotify.com/v1/",
});

export default apiCaller;
