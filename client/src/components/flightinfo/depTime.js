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


class DepartureTime extends Component {

	render() {

		let convertedTime = timeConverter(this.props.filed_departuretime);	

		return (
			<h4>Departure Time: {convertedTime}</h4>
		)
	}
}


export default DepartureTime;