import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import planeBug from './images/planebug.png';
import "./header.css";


class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-pcBlue mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand"><img src={planeBug} className="d-inline-block align-top mr-2" width="23" alt="logo" />
            Planes Change
            </a>
          <div>

              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <Link to="/availFlights" className="nav-link">Available Flights</Link>
                </li>
                <li className="nav-item">
                  <Link to="/hotels" className="nav-link">Hotels</Link>
                </li>
                <li className="nav-item">
                  <Link to="/rentalCars" className="nav-link">Rental Cars</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
    );
  }
}

export default Header;
