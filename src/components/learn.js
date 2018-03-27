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
          <Col m={5} >
              <CardPanel className="teal lighten-4 black-text tc">
                  <span className="learnSymbol">{this.state.symbol}</span><br />
                  <span className="learnPronoun">{this.state.pronounciation}</span>
              </CardPanel>
          </Col>
      </Row>
      </div>
    )
  }
}

export default Learn
