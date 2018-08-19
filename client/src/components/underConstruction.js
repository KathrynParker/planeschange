import React, { Component } from "react";
import underconst from './images/underconst.png';
import "./underConstruction.css";

class UnderConstruction extends Component {
  render() {
    return (
      <div className="child">
        <div className="container">
        <div className="constructionPNG"><img src={underconst} alt="Under Construction" /></div>
        </div>
      </div>
    );
  }
}

export default UnderConstruction;