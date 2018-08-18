import React, { Component } from "react";
import "./searchForm.css";
import axios from 'axios';
import FlightInfo from './flightinfo/flightInfo';
import logo33x from './images/logo33.png';

class SearchForm extends Component {

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

        <div>
            {this.state.flight ? (
                <FlightInfo flight={this.state.flight} />
            ) : (
                <div>
                    <div>
                        <div>
                        <div>
                                <div className="img-fluid logoPNG"><img src={logo33x} alt="logo" /></div>
                                <form onSubmit={this.flightNumEntered}>
                                <div className="searchField">
                                    <input type="text" name="flightNum" placeholder="ex. DL8996" />
                                    <button class="" type="submit">Show Me</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
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
            this.props.setOriginDest(response.data.origin, response.data.destination);
            this.setState({
                flight: response.data,
            })
        })
        .catch((res) => {
            console.log(res);
        });
    }

    }

export default SearchForm;
