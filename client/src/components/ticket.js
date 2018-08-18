import React, { Component } from "react";
import "./ticket.css";
import SearchForm from "./searchForm";

class Ticket extends Component {
  render() {
    return (
      <div className="child">
        <div className="container ticket">

              <div className="row">
                <div className="col">
                  <SearchForm setOriginDest={this.props.setOriginDest}/>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default Ticket;