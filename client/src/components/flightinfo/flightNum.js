import React, { Component } from 'react';

class FlightNum extends Component {

	render() {
		return (
				<div className="col">
					<div><i className="col-2 float-left fa fa-plane faIconLeft pt-0"></i></div>
					<div>
						<h5 className="text-left mb-0">FLIGHT NUMBER:</h5>
						<h3 className="text-left mt-1">{this.props.ident}</h3>
					</div>
				</div>
			)
	}
}

export default FlightNum;