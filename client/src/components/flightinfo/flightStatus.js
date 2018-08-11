import React, { Component } from 'react';

class FlightStatus extends Component {

	

	render() {
		return (
			<h2 className="flightStatus">Status: {this.props.status}</h2>
			)
	}
}

export default FlightStatus;