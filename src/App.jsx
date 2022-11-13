import "./App.css";
import Home from "./components/home";
// import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Link } from "react-router-dom";

function App() {
	{
		/* <Navbar /> */
	}
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
