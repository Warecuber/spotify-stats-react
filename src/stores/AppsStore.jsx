import { createStore, createHook } from "react-sweet-state";

// Import utils

// Private functions

// Public functions
const AppsStore = createStore({
	initialState: {
		active_app: "TopSongs",
	},
	actions: {
		changeApp:
			(app) =>
			({ setState }) => {
				setState({ active_app: app });
			},
	},
	name: "AppsStore`",
});

const useApps = createHook(AppsStore);

// Exports
export default useApps;
