import React, { Component } from 'react'

class Login extends Component {
  render() {
    return(
      <div>
        <label for="email">email: </label>
          <input id="email" type="email" />
        <label for="password">password: </label>
          <input id="password" type="password" />
        <input type="submit" value="submit" />
      </div>
    )
  }
}

export default Login
