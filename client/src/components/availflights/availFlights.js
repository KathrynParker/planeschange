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
        console.log(this.props);
        axios.post('/api/flightList/availFlights', {
                destination: this.props.destination,
                origin: this.props.origin
        }).then(({ response }) => {
            this.setState({
                flights: response
            });
        })
    }

render() {

    // let FlightListJSX = this.state.flights.map( (flight, index) => {
    //     return <FlightList key={index} {...flight} />
    // });

    return (
		<div>
            {/* <FlightListJSX /> */}
            <FlightList />
		</div>
            )
    }
}

export default AvailFlights;

