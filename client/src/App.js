import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import FlightInfo from './components/flightinfo/flightInfo';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.flightNumEntered = this.flightNumEntered.bind(this);
        this.state = {
            flight: '',
            showFlightStatusPage: false,
        };
    }

    render() {
        return (
        <div className="">
            <h1>Planes Change</h1>
            <h3>Enter Flight Number to Begin</h3>
            <form onSubmit={this.flightNumEntered}> 
                <input className="flightNum" name="flightNum" placeholder="Flight Number"></input>
                <button type="submit">Show Me</button>
            </form>
            <hr/>
            <p>Log in to save info</p>
            <Login></Login>
        </div>
        );
    }

    flightNumEntered = (event) => {
        event.preventDefault();
        axios.get(`/api/flightInfo/${event.target.flightNum.value}`)
        .then((response) => {
            this.setState({
                flight: response.data,
            })
        })
        .catch((res) => {
            console.log(res);
        });
}

}

export default App;
