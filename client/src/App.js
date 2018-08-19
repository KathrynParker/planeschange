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
    render() {
        return (
            <div>
                <Header />
                <Footer />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/availFlights" component={AvailFlights} />
                    <Route path="/hotels" component={UnderConstruction} />
                    <Route path="/rentalCars" component={UnderConstruction} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/" component={Ticket} />
                </Switch>
            </div>

        );
    }
    }

export default App;
