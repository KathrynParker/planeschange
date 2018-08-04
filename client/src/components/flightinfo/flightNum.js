import React, { Component } from 'react';

class FlightNum extends Component {

	render() {
		return (
			<h3 class="flightNum">Flight Number: {this.props.ident}</h3>
			)
	}
}

export default FlightNum;