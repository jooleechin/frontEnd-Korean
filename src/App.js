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
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      fName: "",
      email: "",
      quizShowing: false
    }
  }
  saveUser = (id, fName, email) => {
    this.setState({
      id: id,
      fName: fName,
      email: email,
      quizShowing: true
    })
  }
  clearUser = () => {
    this.setState({
      id: 0,
      fName: "",
      email: "",
      quizShowing: false
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header id={this.state.id} quizShowing={this.state.quizShowing} clearUser={this.clearUser}/>
          <Route exact path="/" component={SplashpageBody} />
          <Route path="/learn" component={Learn} />
          <Route path="/quiz" component={Quiz} />
          <Route exact path="/login" render={props => {
            return <Login saveUser={this.saveUser} clearUser={this.clearUser} {...props} />
          }} />
          <Route path="/signup" render={props => {
            return <CreateAccount saveUser={this.saveUser} {...props} />
          }} />
          <Route path='/options' render={(props) => (
            <OptionsView {...props} fName={this.state.fName} />
          )} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
