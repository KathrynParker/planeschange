import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Rentals from './rentals.js';
import Hotels from './hotels.js';
import GateNumber from '../client/src/components/flightinfo/gateNum.js';
import FlightStatus from '../client/src/components/flightinfo/flightStatus.js';

class Favorites extends Component {

	render() {
		return (
			<div>
                
                <GateNumber />
                <FlightStatus />

                <div>
                    <h4>Airport Name</h4>
                </div>

                <Switch>
                    <Route path="/rentals" component={Rentals} />
                    <Route path="/hotels" component={Hotels} />
                </Switch>

            </div>
			)
	}
}

export default Favorites;