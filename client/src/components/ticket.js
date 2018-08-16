import React, { Component } from "react";
import "./ticket.css";
import SearchForm from "./searchForm";
import Login from "./login";

class Ticket extends Component {
  render() {
    return (
      <div className="child">
        <div className="container ticket">

              <div className="row">
                <div className="col-8">
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