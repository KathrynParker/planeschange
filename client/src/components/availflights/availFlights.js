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
            origin: '',
        }
    }

    componentWillMount() {
        axios.post('/api/flightList/availFlights', {
            destination: this.props.destination,
            origin: this.props.origin
        }).then((response) => {
            this.setState({
                flights: response.data,
            });
        })
    }


render() {


    return (
		<div className="container align-center">
            
            {/* spinner */}
            <div id="spinner" className="fa fa-spinner fa-spin spinner-size"></div>
            
            <div className="row">
                {this.state.flights.map(flight => <FlightList {...flight} />)}
            </div>
		</div>
        )
    }
}

export default AvailFlights;

