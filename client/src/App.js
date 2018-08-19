import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Ticket from './components/ticket';
import Footer from './components/footer';
import AboutUs from './components/aboutUs';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import AvailFlights from './components/availflights/availFlights';
import Login from './components/login';
import UnderConstruction from './components/underConstruction';


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
                    <Route path="/login" component={Login} />
                    <Route path="/availFlights" render={() =>{
                        return (
                            <AvailFlights destination={this.state.destination} origin={this.state.origin}/>
                        )
                    }} />
                    <Route path="/hotels" component={UnderConstruction} />
                    <Route path="/rentalCars" component={UnderConstruction} />
                    <Route path="/" render={() =>{
                        return (
                            <Ticket setOriginDest={this.setOriginDest.bind(this)}/>
                        )
                    }} />
                    <Route path="/about" component={AboutUs} />
                </Switch>
            </div>

        );
    }
    }

export default App;
