import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";
const ProjectItem = ({ image, name, skills, id }) => {
	const navigate = useNavigate();
	return (
		<div
			className="projectItem"
			onClick={() => {
				navigate(`/project/${id}`);
			}}
		>
			<div style={{ background: `url(${image})` }} className="bgImage"></div>
			<h1>{name}</h1>
			<span>{skills}</span>
		</div>
	);
};

export default ProjectItem;
