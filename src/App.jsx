import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Places from "./components/placesToStay";
import Modal from "./components/modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/places" element={<Places />} />
					<Route path="/connect-wallet" element={<Modal />} />
				</Routes>
			</Router>
				<Footer />
		</div>
	);
}

export default App;
