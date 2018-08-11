import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import FlightInfo from './components/flightinfo/flightInfo';
import axios from 'axios';
import logo_wht from './logo_wht.svg';
import logo3 from './logo3.svg';
import mark2 from './mark2.svg';
import logo33x from './logo3-3x.png';

class App extends Component {

    constructor(props) {
        super(props);
        this.flightNumEntered = this.flightNumEntered.bind(this);
        this.state = {
            flight: null,
            showFlightStatusPage: false,
        };
    }

    render() {
        return (

        <div className="">
            {this.state.flight ? (
                <FlightInfo flight={this.state.flight} />
            ) : (
                <div className="wrapper">
                    <header className="header"></header>
                    <div className="main">
                        <div className="logoPNG"><img src={logo33x} alt="logo" /></div>
                        <h4 className="flightSubhead">Enter Flight Number to Begin</h4>
                        <form onSubmit={this.flightNumEntered}>
                            <div className="field">
                                <input type="text" name="flightNum" placeholder="ex. DL8996"></input>
                                <button type="submit">Show Me</button>
                            </div>
                        </form>
                        <h5 className="loginSubhead">Log in to save info</h5>
                        <Login></Login>
                    </div>
                    <footer className="footer"></footer>
                </div>
            )}
        </div>
        );
    }

    flightNumEntered = (event) => {
        event.preventDefault();
        axios.get(`/api/flightInfo/${event.target.flightNum.value}`)
        .then((response) => {
            console.log(response.data);
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
