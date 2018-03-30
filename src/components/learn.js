import React, { Component } from 'react'
import axios from 'axios'
import Nanobar from 'nanobar'
import { Row, Col, CardPanel, Button } from 'react-materialize'
let nanobar = new Nanobar()
let number = 1
let percentage = 2.5

class Learn extends Component {
  state = {
     number: 1,
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
    nanobar.go(percentage)
    return (
      <div>
      <Row className='column'>
          <Col>
            <div className="pinkColor lighten-4 black-text tc card">
              <span className="learnSymbol">{this.state.symbol}</span><br /><br />
              <span className="learnPronoun">{this.state.pronounciation}</span>
            </div>
          </Col>
          <div className="navigateButt">
            <Button className="previous calisto tracked"onClick={(e) => {
              e.preventDefault()
              if(number > 1) {
                number--
                percentage -= 2.5
              }
              nanobar.go(percentage)
              this.componentDidMount()
            }} waves='light'>Previous
            </Button>
            <Button className="next calisto tracked" onClick={(e) => {
              e.preventDefault()
              if (number < 40) {
                number++
                percentage += 2.5
              }
              nanobar.go(percentage)
              this.componentDidMount()
            }} waves='light'>Next
            </Button>
          </div>
      </Row>

    </div>
    )
  }
}

export default Learn
