import React, { Component } from 'react';
import FlightList from './flightList';


class AvailFlights extends Component {

	render() {
		return (
			<div className="container">
                <div className="row">
                    <FlightList />
                </div>
            </div>
			)
	}
}

export default AvailFlights;