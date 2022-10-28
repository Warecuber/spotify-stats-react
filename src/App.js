import "./App.css";

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
		</div>
	);
}

// Exports
export default App;
