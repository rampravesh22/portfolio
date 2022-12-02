import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
const Experience = () => {
	return (
		<div className="experience">
			<VerticalTimeline lineColor="#3e497a">
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					// date="2012 - 2013"
					iconStyle={{ background: "#3e497a", color: "#ffffff" }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						D.D.H.S.S Bhitauli Maharajganj.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">HghSchool</h4>
					<p>Science</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					// date="2013 - 2015"
					iconStyle={{ background: "#3e497a", color: "#ffffff" }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						M.C.I.C Pakadiyar Bishunpur
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Intermediate
					</h4>
					<p>Mathematics</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					// date="2018 - 2022"
					iconStyle={{ background: "#3e497a", color: "#ffffff" }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						United College of Engineering and Research.
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor of Technology
					</h4>
					<p>Computer Scince and Engineering.</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
