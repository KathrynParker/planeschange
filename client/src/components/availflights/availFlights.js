import React, { Component } from 'react';
import FlightList from './flightList';
import './availFlights.css';
import axios from 'axios';


class AvailFlights extends Component {

    constructor() {
        super();
        this.state = {
            flights: [],
            destination: '',
            origin: ''
        }
    }

    componentWillMount() {
        axios.post('/api/flightList/availFlights', {
            destination: this.props.destination,
            origin: this.props.origin
        }).then((response) => {
            this.setState({
                flights: response.data
            });
        })
    }

render() {

    return (
		<div>
            <div className="results">
                {this.state.flights.map(flight => <FlightList {...flight} />)}
            </div>
		</div>
        )
    }
}

export default AvailFlights;

