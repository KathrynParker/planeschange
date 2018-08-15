import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-pcBlue mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">Planes Change</a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Hotels</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Available Flights</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Rental Cars</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
