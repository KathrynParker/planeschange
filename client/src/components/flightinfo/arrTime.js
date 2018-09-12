import React, { Component } from 'react';

function timeConverter(UNIX_timestamp){
	let a = new Date(UNIX_timestamp * 1000);
	let hour = a.getHours(); // looks like this is EDT
	let min = a.getMinutes();
	let time;

	if (hour > 12) {
		return time = (hour - 12) + ':' + min + ' PM EDT';
	} else if (hour === 0) {
		return time = 12 + ':' + min + ' AM EDT';
	}
}

class ArrivalTime extends Component {
	render() {

		let convertedTime = timeConverter(this.props.estimatedarrivaltime);

		return (
			<div className="col">
				<div><i className="col-2 float-left fas fa-plane-arrival faIconLeft pt-0"></i></div>
				<div>
					<h5 className="text-left mb-0">ARRIVAL TIME:</h5>
					<h3 className="text-left mt-1">{convertedTime}</h3>
				</div>
			</div>
		)
	}
}

export default ArrivalTime;