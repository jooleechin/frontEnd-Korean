import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  loginCheck(e) {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    axios.post('/login', { email, password })
    .then (data => {
      if (data.data.matches) {
        sessionStorage.setItem('u')
      }
    })
  }

  // loginCheck(email, password) {
  //   axios.post(`${baseURL}/login`, {email, password})
  //   .then (data => {
  //     console.log(data)
  //   })
  // }



  render() {
    return(
      <div>
        <form id="formLogin" onSubmit={this.loginCheck}>
          <label for="email">email: </label>
            <input name="email" id="email" type="email" />
          <label for="password">password: </label>
            <input name="password" id="password" type="password" />
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default Login
