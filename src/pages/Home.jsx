import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<div className="about">
				<h4> Hi, My Name is Rampravesh</h4>
				<div className="prompt">
					<p>
						A software developer with a passion for learning and creating.
					</p>
					<a href="https://:">
						<LinkedInIcon />
					</a>
					<a href="">
						<EmailIcon />
					</a>
					<a href="https://github.com/rampravesh22">
						<GithubIcon />
					</a>
				</div>
			</div>
			<div className="skills">
				<h1> Skills</h1>
				<ol className="list">
					<li className="item">
						<h2> Front-End</h2>
						<span>
							ReactJS, Angular, Redux, HTML, CSS NPM, BootStrap,
							MaterialUI, TailwindCSS
						</span>
					</li>
					<li className="item">
						<h2>Back-End</h2>
						<span>MySQL, MongoDB, MS SQL</span>
					</li>
					<li className="item">
						<h2>Languages</h2>
						<span>JavaScript, Java, Python, C, C++</span>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Home;
