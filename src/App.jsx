import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Components/utils
import Navbar from "./root/Navbar";
import SpotifyApp from "./root/AppContainer";
import WelcomePage from "./root/WelcomePage";

import useUser from "./stores/UserStore";

// Private functions

// Public functions
function App() {
	const [userState] = useUser();
	return (
		<div className="App">
			<Navbar />
			{userState.is_logged_in ? <SpotifyApp /> : <WelcomePage />}
			<ToastContainer
				position="bottom-right"
				theme="light"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
			/>
		</div>
	);
}

// Exports
export default App;
