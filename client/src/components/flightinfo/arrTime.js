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
				<div><h4>Arrival:</h4></div>
				<div><h3>{convertedTime}</h3></div>
			</div>
		)
	}
}


export default ArrivalTime;