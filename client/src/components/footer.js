import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <nav className="navbar navbar-expand-sm navbar-dark bg-pcBlue mb-3 py-0">
          <div className="container">
            <h6 className="copyRight">&#169; 2018</h6>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;



<p className="navbar-brand mx-auto pt-3" href="#">	&#169; 2018</p>