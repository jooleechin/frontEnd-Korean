import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// let baseURL = `https://learn-hangul.herokuapp.com`
let baseURL = `http://localhost:3001`

class Login extends Component {
  loginCheck = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    axios.post(`${baseURL}/login`, { email, password })
    .then (data => {
      let id = data.data.matches.id
      let name = data.data.matches.fName
      if (data.data.matches) {
        this.props.saveUser(id, name, email)
        this.props.history.push('/options')
      } else {
        alert('Your password is not correct!')
      }
    })
    .catch(e => console.log(e))
  }
  render() {
    // console.log(this.props) this.props.history gets a list of different functions useful for redirection
    return(
      <div className="box2">
        <form id="formLogin" onSubmit={this.loginCheck}>
          <label for="email" className="calisto">email: </label>
            <input name="email" id="email" type="email" required/>
          <label for="password" className="calisto">password: </label>
            <input name="password" id="password" type="password" required/>
          <div className="submitOcreate">
            <input type="submit" value="login" id="submit" className="calisto grow" />
          </div>
        </form>
        <Link to="/signup"><h3 className="grow tc create">create a new account!</h3></Link>
      </div>
    )
  }
}

export default Login
