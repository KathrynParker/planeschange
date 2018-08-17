import React, { Component } from 'react';

function translateStatus(origStatus) {

	if (origStatus === 'L') {
		return 'Touch Down!';
	} else if (origStatus === 'S') {
		return 'On Time';
	} else if (origStatus === 'A') {
		return 'In Flight';
	} else if (origStatus === 'U') {
		return '¯\_(ツ)_/¯';
	} else if (origStatus === 'R') {
		return 'Redirected';
	} else if (origStatus === 'D') {
		return 'Diverted';
	} else if (origStatus === 'C') {
		return 'Cancelled';
	} else if (origStatus === 'NO') {
		return 'Not Operational';
	} else {
		return '¯\_(ツ)_/¯';
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