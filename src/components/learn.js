import React, { Component } from 'react'
import axios from 'axios'
import Nanobar from 'nanobar'
import { Row, Col, Button } from 'react-materialize'

class Learn extends Component {
  state = {
     number: 1,
     info: [],
     learn: '',
     symbol: '',
     pronounciation: '',
     nanobar: new Nanobar(this.props.percentage),
     percentage: this.props.percentage || 2.5
  }

  componentDidMount() {
     axios.get(`http://localhost:3000/learn/${this.state.number}`)
       .then((response) => {
         console.log('test', response.data.learn)
         const info = response.data;
         this.setState({
           symbol: info.learn.symbol,
           pronounciation: info.learn.pronounciation
         })
       })
  }

  componentWillUnmount() {

    this.state.nanobar.el.parentNode.removeChild(this.state.nanobar.el)
    this.props.savePercentage(this.state.percentage)
  }

  render() {
    console.log(this.props)
    this.state.nanobar.go(this.state.percentage)
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
              if(this.state.number > 1) {
                this.setState({
                  number: this.state.number-1,
                  percentage: this.state.percentage-2.5
                })
              }
              this.state.nanobar.go(this.state.percentage)
              this.componentDidMount()
            }} waves='light'>Previous
            </Button>
            <Button className="next calisto tracked" onClick={(e) => {
              e.preventDefault()
              if (this.state.number < 40) {
                this.setState({
                  number: this.state.number-1,
                  percentage: this.state.percentage+2.5
                })
              }
              this.state.nanobar.go(this.state.percentage)
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
