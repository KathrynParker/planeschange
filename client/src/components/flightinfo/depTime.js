import React, { Component } from 'react';


	function timeConverter(UNIX_timestamp){
		let a = new Date(UNIX_timestamp * 1000);
		let hour = a.getHours(); // looks like this is EDT
		let min = a.getMinutes();
		let time = hour + ':' + min;
		return time;
	}


class ArrivalTime extends Component {

	render() {

		let convertedTime = timeConverter(this.props.filed_departuretime);	

		return (
			<h4>Departure Time: {convertedTime} EDT</h4>
		)
	}
}


export default ArrivalTime;