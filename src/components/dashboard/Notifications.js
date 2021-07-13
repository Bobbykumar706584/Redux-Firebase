import React from "react";
import moment from "moment";
const Notifications = (props) => {
	const { notification } = props;
	return (
		<div className="section">
			<div className="card z-depth-">
				<div className="card-content">
					<span className="card-title">Notifications</span>
					<ul className="notifications">
						{notification &&
							notification.map((item) => {
								return (
									<li key={item.id}>
										<span className="pink-text">
											{item.user}
										</span>
										<span> {item.content}</span>
										<div className="grey-text note-date">
											{moment(
												item.time.toDate()
											).format()}
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
