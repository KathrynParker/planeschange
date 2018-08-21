import React, { Component } from 'react';


function timeConverter(UNIX_timestamp){
	let a = new Date(UNIX_timestamp * 1000);
	let hour = a.getHours(); // looks like this is EDT
	let min = a.getMinutes();
	let time;

	if (hour > 12 && min > 40) {
		return time = (hour - 12) + ':' + (min - 40) + ' PM EDT';
	} else if (hour === 0 && min > 40) {
		return time = 12 + ':' + (min - 40) + ' AM EDT';
	} else if (hour === 0 && min < 40) {
		return time = 12 + ':' + (min - 10) + ' AM EDT';
	} else if (hour > 12 && min < 40) {
		return time = (hour - 12) + ':' + (min - 10) + ' PM EDT';
	}
}

class BoardTime extends Component {

	render() {

		let boardingTime = timeConverter(this.props.filed_departuretime);

		return (
			<h4 className="times">Boarding In: {boardingTime}</h4>
		)
	}
}

export default BoardTime;