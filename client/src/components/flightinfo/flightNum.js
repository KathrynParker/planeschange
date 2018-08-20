import React, { Component } from 'react';

class FlightNum extends Component {

	render() {
		return (
			<div className="col">
				<div><h4 className="gateNum">Flight:</h4></div>
				<div><h3 className="gateNum">{this.props.ident}</h3></div>
			</div>
			)
	}
}

export default FlightNum;