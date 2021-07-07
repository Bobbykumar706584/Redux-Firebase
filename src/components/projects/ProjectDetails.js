import React from "react";

const ProjectDetails = (props) => {
	console.log(props)
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className="card-action gret lighten-4 grey-text">
					<div>Posted by the Bobby</div>
					<div>5th July, 2pm</div>
				</div>
			</div>
		</div>		
	)
}

export default ProjectDetails;

