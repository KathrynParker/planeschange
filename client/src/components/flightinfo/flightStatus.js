import React, { Component } from 'react';

function translateStatus(origStatus) {

	if (origStatus === 'L') {
		return 'TOUCH DOWN!';
	} else if (origStatus === 'S') {
		return 'ON TIME';
	} else if (origStatus === 'A') {
		return 'IN FLIGHT';
	} else if (origStatus === 'U') {
		return '¯|_(ツ)_|¯';
	} else if (origStatus === 'R') {
		return 'REDIRECTED';
	} else if (origStatus === 'D') {
		return 'DIVERTED';
	} else if (origStatus === 'C') {
		return 'CANCELLED';
	} else if (origStatus === 'NO') {
		return 'NOT OPERATIONAL';
	} else {
		return "¯|_(ツ)_|¯";
	}
}

class FlightStatus extends Component {
	render() {

		let newStatus = translateStatus(this.props.status);

		return (
			<div className="row text-center y-5">
				<div className="col-12 p-0"><h3>Flight Status:</h3></div>
				<div className="col-12 statusLarge p-0">{newStatus}</div>
			</div>
		)
	}
}

export default FlightStatus;