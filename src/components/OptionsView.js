import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OptionsView extends Component {
  render() {
    return(
      <div>
        <Link to='/learn'><h1>learn</h1></Link>
        <Link to='/quiz'><h1>quiz</h1></Link>
      </div>
    )
  }
}

export default OptionsView
