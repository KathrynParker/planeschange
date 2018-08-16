import React, { Component } from "react";
import "./ticket.css";
import SearchForm from "./searchForm";
import Login from "./login";
import logo33x from './images/logo33.png';

class Ticket extends Component {
  render() {
    return (
      <div className="child">
        <div className="container ticket">

              <div className="row">
                <div className="col-8">
                  <div className="img-fluid logoPNG"><img src={logo33x} alt="logo" /></div>
                  <SearchForm />
                </div>
                <div className="col">
                  <div><Login /></div>
                </div>

              </div>
        </div>
      </div>
    );
  }
}

export default Ticket;