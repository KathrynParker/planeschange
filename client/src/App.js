import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Ticket from './components/ticket';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticket />
                <Footer />
            </div>

        );
    }
    }

export default App;
