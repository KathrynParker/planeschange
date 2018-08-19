import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

import Arrivaltime from './arrTime.js';
import DepartureTime from './depTime.js';
import FlightNum from './flightNum';
import FlightStatus from './flightStatus';
import GateNumber from './gateNum';
import logo33x from '../images/logo33.png';

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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <FlightNum ident={this.props.flight.ident}/>
                            <GateNumber faFlightID={this.props.flight.faFlightID} />
                            <FlightStatus status={this.props.flight.status} />
                            <DepartureTime filed_departuretime={this.props.flight.filed_departuretime} />
                            <Arrivaltime estimatedarrivaltime={this.props.flight.estimatedarrivaltime} />
                            <a href="/" className="link">Enter Another Flight</a>


                        </div>
                        <div className="col-4">
                        <div className="logoPNGSmall m-auto"><img src={logo33x} alt="logo" /></div>
                            <form id="emailForm" onSubmit={this.email.bind(this)}>
                                <div><h5 className="emailSubhead text-center m-4">Email your ETA!</h5></div>
                                <div><input className="form-control mb-4" type="text" name="fromEmail" placeholder="From Email"></input></div>
                                <div><input className="form-control mb-4" type="text" name="toEmail" placeholder="To Email"></input></div>
                                <div><button className="btn btn-block btn-primary mt-4" type="submit">Send ETA</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

			)
	}
}

export default FlightInfo;