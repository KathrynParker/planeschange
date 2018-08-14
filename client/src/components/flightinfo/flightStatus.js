import React, { Component } from 'react';

function translateStatus(origStatus) {

	if (origStatus === 'L') {
		return 'Landed';
	} else if (origStatus === 'S') {
		return 'Scheduled';
	} else if (origStatus === 'A') {
		return 'Active';
	} else if (origStatus === 'U') {
		return 'Unknown';
	} else if (origStatus === 'R') {
		return 'Redirected';
	} else if (origStatus === 'D') {
		return 'Diverted';
	} else if (origStatus === 'C') {
		return 'Cancelled';
	} else if (origStatus === 'NO') {
		return 'Not Operational';
	} else {
		return 'Unknown';
	}
}


class FlightStatus extends Component {


	render() {


		let newStatus = translateStatus(this.props.status);

		return (
			<h2 className="flightStatus">{newStatus}</h2>
			)
	}
}

export default FlightStatus;