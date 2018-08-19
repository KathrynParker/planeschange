import React, { Component } from "react";
import "./ticket.css";
import SearchForm from "./searchForm";

class Ticket extends Component {
  render() {
    return (
      <div className="child">
        <div className="container ticket">
          <SearchForm setOriginDest={this.props.setOriginDest}/>
        </div>
      </div>
    );
  }
}

export default Ticket;