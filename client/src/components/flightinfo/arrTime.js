import React, { Component } from 'react';
// import axios from 'axios';

class ArrivalTime extends Component {

	render() {
		return (
			<h4>Arrival Time: {this.props.estimatedarrivaltime}</h4>
		)
	}
}

export default ArrivalTime;