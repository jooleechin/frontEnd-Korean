import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
import SplashpageBody from './components/SplashpageBody'
import Learn from './components/learn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Learn />
      </div>
    );
  }
}

export default App
