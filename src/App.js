import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header'
import SplashpageBody from './components/SplashpageBody'
import Learn from './components/learn'
import Login from './components/Login'
import Quiz from './components/quiz'
import CreateAccount from './components/CreateAccount'
import OptionsView from './components/OptionsView'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      fName: "",
      email: ""
    }
  }
  saveUser = (id, fName, email) => {
    this.setState({
      id: id,
      fName: fName,
      email: email
    })
  }
  clearUser = () => {
    this.setState({
      id: 0,
      fName: "",
      email: ""
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header id={this.state.id} clearUser={this.clearUser}/>
          <Route exact path="/" component={SplashpageBody} />
          <Route path="/learn" component={Learn} />
          <Route path="/quiz" component={Quiz} />
          <Route exact path="/login" render={props => {
            return <Login saveUser={this.saveUser} clearUser={this.clearUser} {...props} />
          }} />
          <Route path="/signup" component={CreateAccount} />
          <Route path='/options' fName={this.state.fName} component={OptionsView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
