import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Ticket from './components/ticket';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import AvailFlights from './components/availflights/availFlights';
import Login from './components/login';


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            flights: [],
            destination: '',
            origin: ''
        }
    }

    setOriginDest(origin, destination) {
        this.setState({
            destination,
            origin
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <Footer />
                <Switch>
                    <Route path="/availFlights" render={() =>{
                        return (
                            <AvailFlights destination={this.state.destination} origin={this.state.origin}/>
                        )
                    }} />
                    <Route path="/login" component={Login} />
                    <Route path="/" render={() =>{
                        return (
                            <Ticket setOriginDest={this.setOriginDest.bind(this)}/>
                        )
                    }} />
                </Switch>
            </div>

        );
    }
    }

export default App;
