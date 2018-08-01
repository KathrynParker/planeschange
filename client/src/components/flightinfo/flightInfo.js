import React, { Component } from 'react';
// import axios from 'axios';

import Arrivaltime from './arrTime.js';
import BoardTime from './boardTime.js';
import DepartureTime from './depTime.js';
import FlightNum from './flightNum';
import FlightStatus from './flightStatus';
import GateNumber from './gateNum';

class FlightInfo extends Component {


	render() {
		return (
			<div>
                <FlightNum/>
                <GateNumber />
                <FlightStatus />
                <DepartureTime />
                <BoardTime />
                <Arrivaltime actualarrivaltime={this.props.flight.actualarrivaltime} />
                <form id="emailForm" onSubmit={this.email}> 
                    <p>Email your ETA!</p>
                    <input placeholder="From email"></input>
                    <input placeholder="To email"></input>
                    <button type="submit">Send ETA</button>
                </form>
            </div>
			)
	}
}

export default FlightInfo;