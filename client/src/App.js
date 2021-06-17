import React, { Component } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import './App.css';
import logo from './images/lob.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header">
            <img src={logo} alt="lob-logo"></img>
          </div>
        </header>
        <div className="container-outter">
          <Navbar />
          <Form />
        </div>
        
      </div>
    );
  }
}

export default App;


