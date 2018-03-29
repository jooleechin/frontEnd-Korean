import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OptionsView extends Component {
  render() {
    return(
      <div className='box'>
        <h2 className='greeting tc b'>greetings, {this.props.fName} please pick a path you want to discover!
        <br />happy learning :)</h2>
        <div className="butts">
          <Link to='/learn'><h1 className="grow pointer">learn</h1></Link>
          <Link to='/quiz'><h1 className="grow pointer">quiz</h1></Link>
        </div>
      </div>
    )
  }
}

export default OptionsView
