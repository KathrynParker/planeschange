import React, { Component } from 'react';
import axios from 'axios';

import Arrivaltime from './arrTime.js';
import BoardTime from './boardTime.js';
import DepartureTime from './depTime.js';
import FlightNum from './flightNum';
import FlightStatus from './flightStatus';
import GateNumber from './gateNum';


class FlightInfo extends Component {
    email(event) {
        function timeConverter(UNIX_timestamp){
            let a = new Date(UNIX_timestamp * 1000);
            let hour = a.getHours(); // looks like this is EDT
            let min = a.getMinutes();
            let time = hour + ':' + min;
            return time;
        }

        event.preventDefault();
        axios.post('/api/mail', {
            fromEmail: event.target.fromEmail.value,
            toEmail: event.target.toEmail.value,
            estimatedarrivaltime: timeConverter(this.props.flight.estimatedarrivaltime),
        })
    }

	render() {
		return (
			<div>
                <FlightNum ident={this.props.flight.ident}/>
                <GateNumber faFlightID={this.props.flight.faFlightID} />
                <FlightStatus />
                <DepartureTime filed_departuretime={this.props.flight.filed_departuretime} />
                <BoardTime filed_departuretime={this.props.flight.filed_departuretime}/>
                <Arrivaltime estimatedarrivaltime={this.props.flight.estimatedarrivaltime} />
                <form id="emailForm" onSubmit={this.email.bind(this)}> 
                    <p>Email your ETA!</p>
                    <input type="text" name="fromEmail" placeholder="From email"></input>
                    <input type="text" name="toEmail" placeholder="To email"></input>
                    <button type="submit">Send ETA</button>
                </form>
            </div>
			)
	}
}

export default FlightInfo;