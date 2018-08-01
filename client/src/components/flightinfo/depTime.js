import React, { Component } from 'react';
// import axios from 'axios';

class DepartureTime extends Component {

	render() {
		return (
			<h4>Departure Time: {this.props.filed_departuretime}</h4>
			)
	}
}

export default DepartureTime;