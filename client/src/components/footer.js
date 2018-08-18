import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="navbar fixed-bottom navbar-light bg-blue mx-auto">
            <a className="navbar-brand mx-auto pt-3" href="#">	&#169; 2018</a>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;