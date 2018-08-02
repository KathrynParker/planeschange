import React, { Component } from 'react';


	function timeConverter(UNIX_timestamp){
		let a = new Date(UNIX_timestamp * 1000);
		let hour = a.getHours();
		let min = a.getMinutes();
		let time = hour + ':' + min;
		return time;
	}


class ArrivalTime extends Component {

	render() {

		let convertedTime = this.props.estimatedarrivaltime;
		console.log(this.props.estimatedarrivaltime);
		timeConverter(convertedTime);

		return (
			// <h4>Arrival Time: {this.props.estimatedarrivaltime}</h4>
			<h4>Arrival Time: {convertedTime}</h4>
		)
	}
}


export default ArrivalTime;