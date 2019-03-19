import React, { Component } from 'react';
import Login from './component/Login/Login';
import Router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router />
      </div>  
    );
  }
}

export default App;
