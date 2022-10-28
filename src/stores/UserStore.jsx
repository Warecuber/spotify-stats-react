import { createStore, createHook } from "react-sweet-state";

// Import utils
import apiCaller from "../utils/apiCaller";

// Private functions
const getUserDetails = (authtoken, callback) => {
	apiCaller
		.get("/me", { headers: { Authorization: `Bearer ${authtoken}` } })
		.then(({ data }) => {
			callback({ name: data.display_name, email: data.email });
			window.location.hash = "";
		})
		.catch((err) => {
			console.log(err);
		});
};

// Public functions
const UserStore = createStore({
	initialState: {
		name: "",
		email: "",
		authtoken: "",
		is_logged_in: false,
	},
	actions: {
		logIn:
			(authtoken) =>
			({ setState }) => {
				setState({ authtoken });
				getUserDetails(authtoken, (data) => {
					setState({ email: data.email });
					setState({ name: data.name });
					setState({ is_logged_in: true });
				});
			},
		setUserData:
			(data) =>
			({ setState }) => {
				setState({ email: data.email });
				setState({ name: data.name });
			},
		logOut:
			() =>
			({ setState }) => {
				setState({ is_logged_in: false });
				setState({ email: "" });
				setState({ name: "" });
				setState({ authtoken: null });
			},
	},
	name: "UserStore`",
});

const useUser = createHook(UserStore);

// Exports
export default useUser;
