import React, { Component } from 'react'
import axios from 'axios'

class CreateAccount extends Component {
  createCheck = (e) => {
    e.preventDefault()
    let fName = e.target.name.value
    let email = e.target.email.value
    let password = e.target.password.value
    axios.post('/signup', { fName, email, password })
    .then (data => {
      let id = data.data[0].id
      this.props.saveUser(id, fName, email)
      this.props.history.push('/options')
    })
    .catch(e => console.log(e))
  }

  render() {
    return(
      <div className="box2">
        <form id="createForm" onSubmit={this.createCheck}>
          <label for="name" className="calisto">first name: </label>
            <input name="name" id="name" type="text" />
          <label for="email" className="calisto">email: </label>
            <input name="email" id="email" type="email" />
          <label for="password" className="calisto">password: </label>
            <input name="password" id="password" type="password" />
          <input type="submit" value="submit" id="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateAccount
