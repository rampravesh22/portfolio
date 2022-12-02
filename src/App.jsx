import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
function App() {
	return (
		<div className="App">
			<NavBar></NavBar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/projects" element={<Projects></Projects>}></Route>
				<Route
					path="/experience"
					element={<Experience></Experience>}
				></Route>
				<Route path="/project/:id" element={<ProjectDisplay />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
