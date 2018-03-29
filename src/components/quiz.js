import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-materialize'
import Nanobar from 'nanobar'

var number = 1

const Next = (props) => {
  return (<Button onClick={(e) => {
    number++
    props.nextQuest()
  }} waves='light'>Next</Button>)
}

class Quiz extends Component {
  state = {
     hideNext: true,
     question: '',
     a: '',
     b: '',
     c: '',
     d: '',
     answer: '',
     aCorrect: null,
     bCorrect: null,
     cCorrect: null,
     dCorrect: null
  }


  test = (userGuess, abcOrD) => {
    let option = ''
    switch (abcOrD) {
      case 'a':
        option = 'aCorrect'
        break
      case 'b':
        option = 'bCorrect'
        break
      case 'c':
        option = 'cCorrect'
        break
      case 'd':
        option = 'dCorrect'
    }
    if(userGuess === this.state.answer) {
      this.setState({[option]: 'correct'})
    } else {
      let correct = ['a', 'b', 'c', 'd'].find(option => this.state[option] == this.state.answer) + 'Correct'
      this.setState({
        [option]: 'incorrect',
        [correct]: 'correct'
      })
    }
    this.showNext()
  }

  showNext = () => {
    this.setState({
      hideNext: false
    })
  }

  componentDidMount() {
    this.nextQuest()
  }

  nextQuest = () => {
    this.setState({
      hideNext: true,
      aCorrect: null,
      bCorrect: null,
      cCorrect: null,
      dCorrect: null
    })
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

        <div className="quizCard pinkColor tc">
          <h2 className="quizSymbol">{this.state.question}</h2>
          <div className="allOptions calisto">
            <h5 className={`options pointer grow ${this.state.aCorrect} `} onClick={() => this.test(this.state.a, 'a')} waves='light'>{this.state.a}</h5>
            <h5 className={`options pointer grow ${this.state.bCorrect} `} onClick={() => this.test(this.state.b, 'b')} waves='light'>{this.state.b}</h5>
          </div>
          <div className="allOptions calisto">
            <h5 className={`options pointer grow ${this.state.cCorrect} `} onClick={() => this.test(this.state.c, 'c')} waves='light'>{this.state.c}</h5>
            <h5 className={`options pointer grow ${this.state.dCorrect} `} onClick={() => this.test(this.state.d, 'd')} waves='light'>{this.state.d}</h5>
          </div>
        </div>
        {!this.state.hideNext && <Next nextQuest={this.nextQuest}/>}
      </div>
    )
  }
}



export default Quiz
