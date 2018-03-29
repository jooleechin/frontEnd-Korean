import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, CardPanel, Button } from 'react-materialize'

var number = 1


class Quiz extends Component {
  state = {
     question: '',
     a: '',
     b: '',
     c: '',
     d: '',
     answer: ''
  }

  test = (userGuess) => {
    if(userGuess === this.state.answer) {
      console.log('correct answer', userGuess, this.state.answer)
    } else {
      console.log('wrong answer', userGuess, this.state.answer)
    }
  }



  componentDidMount() {
     axios.get(`http://localhost:3000/questions/${number}`)
       .then((response) => {
         const info = response.data;
         this.setState({
           question: info.question.question,
           a: info.question.a,
           b: info.question.b,
           c: info.question.c,
           d: info.question.d,
           answer: info.question.answer
         })
       })
  }
  render() {
    return (
      <div>

        <div className="pinkColor tc quizCard">
          <h2 className="quizSymbol">{this.state.question}</h2>
          <div className="allOptions calisto">
            <h5 className="options pointer grow" onClick={() => this.test(this.state.a)} waves='light'>{this.state.a}</h5>
            <h5 className="options pointer grow" onClick={() => this.test(this.state.b)} waves='light'>{this.state.b}</h5>
          </div>
          <div className="allOptions calisto">
            <h5 className="options pointer grow" onClick={() => this.test(this.state.c)} waves='light'>{this.state.c}</h5>
            <h5 className="options pointer grow" onClick={() => this.test(this.state.d)} waves='light'>{this.state.d}</h5>
          </div>
        </div>
        <Button onClick={(e) => {
          number++
          this.componentDidMount()
        }} waves='light'>Next</Button>
      </div>
    )
  }
}

export default Quiz
