import React, { Component } from 'react';
import FlightList from './flightList';
import { checkServerIdentity } from 'tls';
import axios from 'axios';


class AvailFlights extends Component {

	constructor() {
		super();
		this.state = {
			flights: [],
			destinationCity: '',
			originCity: ''
		}
	}    

	componentWillMount() {
		axios.post('/api/flightList/availFlights', {
				destinationCity: this.props.destinationCity,
				originCity: this.props.originCity
		}).then(({ response }) => {
			this.setState({
				flights: response
			});
		})
	}

render() {
		
	// let jobsJSX = this.state.jobs.map( (job, index) => {
	// 	return <JobsListItem key={index} {...job}/>
	// });
	
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