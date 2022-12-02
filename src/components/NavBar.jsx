import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
const NavBar = () => {
	const location = useLocation();
	// console.log(location);
	const [expandNavBar, setExpandNavBar] = useState(false);
	useEffect(() => {
		setExpandNavBar(false);
	}, [location]);
	return (
		<div className="navbar" id={expandNavBar ? "open" : "close"}>
			<div className="toggleButton">
				<button
					onClick={() => {
						setExpandNavBar((prev) => !prev);
					}}
				>
					<ReorderIcon></ReorderIcon>
				</button>
			</div>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/experience">Experience</Link>
			</div>
		</div>
	);
};

export default NavBar;
