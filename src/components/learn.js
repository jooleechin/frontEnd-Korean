import React, { Component } from 'react'
import axios from 'axios'

import { Row, Col, CardPanel } from 'react-materialize'


class Learn extends Component {
  state = {
     info: [],
     learn: '',
     symbol: '',
     pronounciation: ''
   }

   componentDidMount() {
     axios.get(`http://localhost:3000/learn/1`)
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
      <Row>
          <Col s={12} m={5}>
              <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks ㅏㅏㅏokok.</span>
              </CardPanel>
          </Col>
      </Row>
        <div>{this.state.symbol} {this.state.pronounciation}</div>
      </div>
    )
  }
}

export default Learn
