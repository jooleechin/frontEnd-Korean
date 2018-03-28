import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  loginCheck = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    axios.post('/login', { email, password })
    .then (data => {
      let id = data.data.matches.id
      let name = data.data.matches.fName
      if (data.data.matches) {
        this.props.saveUser(id, name, email)
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
            <input name="email" id="email" type="email" />
          <label for="password" className="calisto">password: </label>
            <input name="password" id="password" type="password" />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default Login
