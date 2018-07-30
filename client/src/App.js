import React, { Component } from 'react';
import './App.css';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div className="">
          <h1>Planes Change</h1>
          <h3>Enter Flight Info to Begin</h3>
          <input placeholder="Flight Number"></input>
          <button>Show Me</button>
          <hr/>
          <p>Log in to save info</p>
          <Login></Login>
      </div>
    );
  }
}

export default App;
