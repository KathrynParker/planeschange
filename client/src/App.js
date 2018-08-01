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
            flight: 'DL1234',
            showFlightStatusPage: false,
        };
    }

    render() {
        return (
        <div className="App-center-page">
            <h1 className="App-page-title">Planes Change</h1>
            <h3>Enter Flight Info to Begin</h3>
            <input className="App-input-field" type="text" placeholder="Flight Number"></input>
            <button  className="App-cta-button" onClick={this.flightNumEntered}>Show Me</button>
            <hr/>
            <p>Log in to save info</p>
            <Login />
        </div>
        );
    }

    flightNumEntered = () => {
        axios({
            method: 'get',
            url: '/flightInfo'
        })
        .then(() => {
            this.setState({
            flight: FlightInfo,
            })
        })
        .catch((res) => {
            console.log(res);
        });
}

}

export default App;
