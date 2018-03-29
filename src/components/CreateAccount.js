import React, { Component } from 'react'

class CreateAccount extends Component {
  render() {
    return(
      <div className="box">
        <form id="createForm">
          <label for="name" className="calisto">name: </label>
            <input name="name" id="name" type="name" />
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

export default CreateAccount
