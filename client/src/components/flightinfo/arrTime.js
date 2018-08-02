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

		let convertedTime = timeConverter(this.props.estimatedarrivaltime);	

		return (
			<h4>Arrival Time: {convertedTime} EDT</h4>
		)
	}
}


export default ArrivalTime;