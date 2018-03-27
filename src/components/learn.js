import React, { Component } from 'react'
import axios from 'axios'

import { Row, Col, CardPanel } from 'react-materialize'


class Learn extends Component {
  state = {
     info: []
   }

   componentDidMount() {
     axios.get(`http://localhost:3000/learn/1`)
       .then((response) => {
         console.log('test', response)
         console.log('snarf', response.data.learn)
         const info = response.data;
         this.setState({ info })
       })
   }
  render() {
    return (
      <div>
      <Row>
          <Col s={12} m={5}>

              <CardPanel className="teal lighten-4 black-text">
                  <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks ㅏㅏㅏokok.</span>
              </CardPanel>

          </Col>
      </Row>
      {console.log(this.state.info.learn)}

      </div>
    )
  }
}

export default Learn
