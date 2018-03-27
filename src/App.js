import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import SplashpageBody from './components/splashPageBody'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SplashpageBody />
      </div>
    );
  }
}

export default App;
