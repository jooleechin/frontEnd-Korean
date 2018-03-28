import React, { Component } from 'react'
import axios from 'axios'
import Nanobar from 'nanobar'
import { Row, Col, CardPanel, Button } from 'react-materialize'

var nanobar = new Nanobar()
var number = 1
var percentage = 1.67
nanobar.go(percentage)

class Learn extends Component {
  state = {
     info: [],
     learn: '',
     symbol: '',
     pronounciation: ''
  }
  componentDidMount() {
     axios.get(`http://localhost:3000/learn/${number}`)
       .then((response) => {
         console.log('test', response.data.learn)
         const info = response.data;
         this.setState({
           symbol: info.learn.symbol,
           pronounciation: info.learn.pronounciation
         })
       })
  }
  render() {
    console.log('state', this.state)
    return (
      <div>
      <Row className='column'>
          <Col>
            <CardPanel className="teal lighten-4 black-text tc card">
              <span className="learnSymbol">{this.state.symbol}</span><br /><br />
              <span className="learnPronoun">{this.state.pronounciation}</span>
            </CardPanel>
          </Col>
      </Row>
      <div className="navigateButt">
        <div className="previous">
          <Button onClick={(e) => {
            e.preventDefault()
            percentage -= 1.67
            nanobar.go(percentage)
            number--
            this.componentDidMount()
          }} waves='light'>Previous
          </Button>
        </div>
        <div className="next">
          <Button onClick={(e) => {
            e.preventDefault()
            percentage += 1.67
            nanobar.go(percentage)
            number++
            this.componentDidMount()
          }} waves='light'>Next
          </Button>
        </div>
      </div>
    </div>
    )
  }
}

export default Learn
